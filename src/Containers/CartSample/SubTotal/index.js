import React, {Component} from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SubTotalIndex extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        Item Total Price
                    </Col>
                    <Col>
                        <span className="indRupeSybel">₹</span>{this.props.total.toFixed(2)} 
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SubTotalIndex;