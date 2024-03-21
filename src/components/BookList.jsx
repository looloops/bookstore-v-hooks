import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, InputGroup, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = (props) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(undefined);

  const updateSelectedBook = (value) => {
    setSelected(value);
  };

  const queryUpdate = (value) => {
    setQuery(value);
  };

  const books = props.books;
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Insert book title"
          aria-label="Search"
          aria-describedby="basic-search"
          value={query}
          onChange={(e) => {
            queryUpdate(e.target.value);
          }}
        />
        <InputGroup.Text>Search</InputGroup.Text>
      </InputGroup>

      <Col md={9}>
        <Row>
          {books
            .filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
            .map((book) => (
              <SingleBook book={book} selectedBook={selected} key={book.asin} updateSelectedBook={updateSelectedBook} />
            ))}
        </Row>
      </Col>
      <Col md={3}>
        <CommentArea idBook={selected}></CommentArea>
      </Col>
    </>
  );
};

export default BookList;
