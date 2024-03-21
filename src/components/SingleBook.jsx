import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

const SingleBook = (props) => {
  const item = props.book;
  return (
    <>
      <Col xs={12} md={6} lg={4}>
        <Card
          data-testid="bookcard"
          onClick={() => props.updateSelectedBook(item.asin)}
          className={props.selectedBook === item.asin && "card-selected"}
        >
          <Card.Img style={{ width: "100%", objectFit: "cover", height: "600px" }} variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              <span>Category: {item.category}</span>
              <br />
              <span>Price: {item.price}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleBook;
