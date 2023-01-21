import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Video from "../video/sample.mp4";
import Camera from "./Camera";
function Grid({ page }) {
    return (
        <Container fluid>
            <Row>
                <Col lg style={{ padding: 20 }}>
                    <div>
                        <video width="100%" className=' rounded' src={Video} autoPlay={true} controls />
                    </div>
                </Col>
                <Col>
                    <Camera page={page} />
                </Col>
            </Row>
        </Container>
    );
}

export default Grid;