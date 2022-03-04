import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

export default function DropCount() {
  return (
    <div id="dropCount">
      <Container>
        <Row>
          <Col md={3} className="text-center dropcountSec">
            DROP COUNT
            <span>5439</span>
          </Col>
          <Col md={3} className="text-center dropcountSec">
            UNIQUE TRAITS
            <span>150</span>
          </Col>
          <Col md={3} className="text-center dropcountSec">
            CATEGORIES
            <span>6</span>
          </Col>
          <Col md={3} className="text-center dropcountSec">
            PRICE
            <span>0.25 ETH</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
