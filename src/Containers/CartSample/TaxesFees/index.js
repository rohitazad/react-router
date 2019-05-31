import React, {Component} from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class TaxesFeesIndex extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        GST (12%)
                    </Col>
                    <Col>
                        <span className="indRupeSybel">₹</span>{this.props.taxesFees.toFixed(2)}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TaxesFeesIndex;