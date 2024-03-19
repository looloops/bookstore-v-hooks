import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
  render() {
    const item = this.props.book;
    return (
      <>
        <Card
          onClick={() => this.props.updateSelectedBook(item.asin)}
          className={this.props.selectedBook === item.asin && "card-selected"}
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
      </>
    );
  }
}

export default SingleBook;
