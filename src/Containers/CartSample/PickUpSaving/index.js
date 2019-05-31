import React, {Component} from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PickUpSavingIndex extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        Item Pickup Savings
                    </Col>
                    <Col>
                        <span className="indRupeSybel">₹</span>{this.props.pickUpPrice.toFixed(2)}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PickUpSavingIndex;