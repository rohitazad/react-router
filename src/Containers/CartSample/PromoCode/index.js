import React, {Component} from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { connect } from 'react-redux';
import { handleChange } from '../ReduxReducerActionStore/Actions/promoCodeActions';

class PromoCodeIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            promoState: false
        }
    }
    handlerBtnClick = ()=>{
        this.setState({
            promoState : !this.state.promoState
        })
    }
    handleChange = (e)=>{
        console.log('hander change text', e);
        this.props.handleChange(e);
    }
    render(){
        const showHideText = this.state.promoState ? 'Hide' : 'Show';
        const plusMinesIcon = this.state.promoState ? '-' : '+';
        return(
            <Container>
                <Row>
                    <Col>
                    <Button variant="primary" className="showHideBtn" onClick={this.handlerBtnClick}>
                        {showHideText} promo code {plusMinesIcon}
                    </Button>
                    <div className={'formSec ' +(this.state.promoState ? 'show': 'hide')}>
                    <Form>
                        <Form.Group controlId="promoCode">
                            <Form.Label>Promo Code:-</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter promo code" 
                                value={this.props.promoCode}
                                onChange={this.handleChange}
                                />
                        </Form.Group>

                        <Button 
                            variant="primary" 
                            type="button"
                            disabled={this.props.isDisabled}
                            onClick={this.props.giveDiscount}
                            >
                                Apply
                        </Button>
                    </Form>
                    </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}


const mapStateToProps = state => ({
    promoCode: state.promoCode.value
  });
//export default PromoCodeIndex;

export default connect(mapStateToProps, {handleChange})(PromoCodeIndex);