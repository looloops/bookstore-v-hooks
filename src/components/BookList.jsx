import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, InputGroup, Form } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    query: "",
    selected: undefined,
  };

  updateSelectedBook = (value) => {
    this.setState({ selected: value });
  };

  queryUpdate = (value) => {
    this.setState({ query: value });
  };

  render() {
    const books = this.props.books;
    return (
      <>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Insert book title"
            aria-label="Search"
            aria-describedby="basic-search"
            value={this.state.query}
            onChange={(e) => {
              this.queryUpdate(e.target.value);
            }}
          />
          <InputGroup.Text>Search</InputGroup.Text>
        </InputGroup>
        <Col sm={6} md={3} lg={4}>
          {books
            .filter((book) => book.title.toLowerCase().includes(this.state.query.toLowerCase()))
            .map((book) => (
              <SingleBook
                book={book}
                selectedBook={this.state.selected}
                key={book.asin}
                updateSelectedBook={this.updateSelectedBook}
              />
            ))}
        </Col>
        <Col>
          <CommentArea idBook={this.state.selected}></CommentArea>
        </Col>
      </>
    );
  }
}

export default BookList;
