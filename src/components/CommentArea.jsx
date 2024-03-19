import { Component } from "react";
import CommentList from "./CommentList";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  };

  getComments = (id) => {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYzMWExOTcxYWZhZjAwMTkxNTY3MDMiLCJpYXQiOjE3MTA0MzA3NDUsImV4cCI6MTcxMTY0MDM0NX0.4uNsRolxtKFQr5r5ppAXXf1kezWR9RbIja_FJ6aByv8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })

      .then((commentsFromAPI) => {
        this.setState({
          comments: commentsFromAPI,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log("Errore", error);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  componentDidUpdate(prevProps) {
    if (this.props.idBook && prevProps.idBook !== this.props.idBook) {
      this.getComments(this.props.idBook);
    }
  }

  render() {
    return (
      <ListGroup>
        {this.state.comments.length === 0 && this.state.isLoading === false && this.state.isError === false && (
          <>
            <ListGroup.Item>Aggiungi il primo commento a questo libro.</ListGroup.Item>
            <AddComment asin={this.props.idBook} />
          </>
        )}
        {this.state.isLoading === true && (
          <div>
            <Spinner animation="border" variant="success" />
          </div>
        )}
        {this.state.isError === true && (
          <div>
            <Alert>Qualcosa è andato storto</Alert>
          </div>
        )}
        {this.state.comments.length > 0 && (
          <>
            <CommentList arrComments={this.state.comments} />
            <AddComment asin={this.props.idBook} />
          </>
        )}
      </ListGroup>
    );
  }
}
export default CommentArea;
