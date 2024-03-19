import "./App.css";
import BookList from "./components/BookList";
import Welcome from "./components/Welcome";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import books from "./data/fantasy.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap";
import { Container, Row } from "react-bootstrap";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <MyNav />
        <Welcome />
        <Container>
          <Row>
            <BookList books={books} />
          </Row>
        </Container>
        <MyFooter />
      </>
    );
  }
}

export default App;
