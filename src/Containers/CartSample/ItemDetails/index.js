import React, {Component} from 'react'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import phoneImg from '../../../assets/Pixel-3a.jpg';


class ItemDetailsIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'Google Pixel 3a',
            cardImage:phoneImg,
            cardDetails:`It has an extraordinary camera with features such as Night Sight, 
                            Super Res Zoom, Portrait Mode and HDR+. 
                            It features a battery that charges fast and lasts all day long. 
                            It also comes with three years of security and OS updates included. 
                            It’s everything you love about Google – in a phone.`,
            showItem:false
        }
    }
    handlerBtnClick = () =>{
        this.setState({
            showItem : !this.state.showItem
        })
    }
    render(){
        const showHideText = this.state.showItem ? 'Hide' : 'Show';
        const plusMinesIcon = this.state.showItem ? '-' : '+';
        return(
            <Container>
                <Row>
                    <Col>
                        <Button variant="primary" className="showHideBtn" onClick={this.handlerBtnClick}>
                            {showHideText} Item Details {plusMinesIcon}
                        </Button>
                        <div className={'accordian ' +(this.state.showItem ? 'show' : 'hide')}>
                            <Card>
                                <Card.Header>{this.state.title}</Card.Header>
                                <Card.Body>
                                    <Card.Img variant="top" src={this.state.cardImage} />
                                    <Card.Title>
                                        {this.state.title} <small>(Used Promo Code "ROHIT" and get 10% Discount)</small>
                                    </Card.Title>
                                    <Card.Text>
                                    {this.state.cardDetails}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <Row>
                                        <Col>
                                            <span>Price</span> <span className="indRupeSybel">₹</span>{this.props.itemPrice}
                                        </Col>
                                        <Col>
                                            <span>Qty:</span> {this.props.qty}
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ItemDetailsIndex;