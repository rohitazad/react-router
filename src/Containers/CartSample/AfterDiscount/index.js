import React, {Component} from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AfterDiscountIndex extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        After Discount
                    </Col>
                    <Col>
                        <span className="indRupeSybel">₹</span>{this.props.afterDiscountedPrice}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AfterDiscountIndex;