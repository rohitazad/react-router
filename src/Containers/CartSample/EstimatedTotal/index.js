import React, {Component} from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class TotalEstimatedIndex extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        Total Price 
                    </Col>
                    <Col>
                        <span className="indRupeSybel">₹</span>{this.props.totalAmount.toFixed(2)}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TotalEstimatedIndex;