import Container from "react-bootstrap/esm/Container";
import items from "../data/romance.json";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import { Component } from "react";
import Col from "react-bootstrap/esm/Col";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row>
          {items.map((item) => (
            <Col sm={6} md={3} lg={4} key={item.asin}>
              <Card>
                <Card.Img style={{ width: "100%", objectFit: "cover", height: "600px" }} variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Category: {item.category}</li>
                      <li>Price: {item.price}</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
