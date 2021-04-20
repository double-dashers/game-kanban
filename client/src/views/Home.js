import React from 'react'
import Row from 'react-bootstrap'
import Col from 'react-bootstrap'

const Home = () => {
    return (
        <Row>
            <Col lg={3} xs={12}>
                Backlog
            </Col>
            <Col lg={3} xs={12}>
                Playing
            </Col>
            <Col lg={3} xs={12}>
                Complete
            </Col>
        </Row>
    )
}

export default Home
