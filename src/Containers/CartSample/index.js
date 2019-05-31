import React, {Component} from 'react'
import './cartSample.scss';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SubTotalIndex from './SubTotal/index';
import PickUpSavingIndex from './PickUpSaving/index';
import TaxesFeesIndex from './TaxesFees/index';
import TotalEstimatedIndex from './EstimatedTotal/index';
import AfterDiscountIndex from './AfterDiscount/index';
import ItemDetailsIndex from './ItemDetails/index';
import PromoCodeIndex from './PromoCode/index';


// Import redux provider
import { connect } from 'react-redux';
import { handleChange } from '../../Containers/CartSample/ReduxReducerActionStore/Actions/promoCodeActions';

class CartIndex extends Component{
    constructor(props){
        super(props);
        //console.log('Constructor call');
        this.state = {
            total: 39999.00,
            pickUpPrice: -1000,
            taxesFees : 0,
            totalAmount:0,
            qty:1,
            isDisabled:false,
            afterDiscountedPrice:0
        }
    }
    componentDidMount(){
        //console.log('Cart Component Did Mount');
        this.setState(
            {taxesFees: (this.state.total + this.state.pickUpPrice) *0.12},
            function(){
                this.setState({
                        totalAmount : this.state.total + this.state.pickUpPrice + this.state.taxesFees
                    });
            }
        )
    }
    componentWillMount(){
        //console.log('Cart Component Will mount');
    }
    giveDiscountHandler = ()=>{
        console.log('giveDiscountHandler click function', this.props);
        if (this.props.promoCode === 'ROHIT') {
            this.setState(
                {afterDiscountedPrice: this.state.totalAmount * 0.9},
                function(){
                    this.setState(
                        {isDisabled:true}
                    )
                }
            )
        }
    }
    render(){
        const afterDiscount = this.state.isDisabled ? <AfterDiscountIndex afterDiscountedPrice={this.state.afterDiscountedPrice}/> : '';
        //console.log('Render Method Call');
        return(
            <div className="container">
                <Container>
                    <Row>
                        <Col>
                            <div className="shoppingCart">
                                <SubTotalIndex total={this.state.total} />
                                <PickUpSavingIndex pickUpPrice={this.state.pickUpPrice} />
                                <TaxesFeesIndex taxesFees={this.state.taxesFees}/>
                                <hr />
                                <TotalEstimatedIndex totalAmount={this.state.totalAmount} />
                                {afterDiscount}
                                <ItemDetailsIndex itemPrice={this.state.totalAmount} qty={this.state.qty} />
                                <hr />
                                <PromoCodeIndex 
                                    isDisabled={this.state.isDisabled} 
                                    giveDiscount={()=>this.giveDiscountHandler()}
                                    />
                            </div> 
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    promoCode: state.promoCode.value
  });
//export default CartIndex;

export default connect(mapStateToProps, {
    handleChange
  })(CartIndex);