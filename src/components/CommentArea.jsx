import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import AddComment from "./AddComment";
import { ListGroup } from "react-bootstrap";
import CommentList from "./CommentList";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getComments = (id) => {
      setIsLoading({
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
          setComments(commentsFromAPI);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Errore", error);
          setIsLoading(false);
          setIsError(true);
        });
    };
    if (props.idBook) {
      getComments(props.idBook);
    }
  }, [props.idBook]);

  return (
    <ListGroup className="sticky-top">
      {comments.length === 0 && isLoading === false && isError === false && (
        <>
          <ListGroup.Item>Aggiungi il primo commento a questo libro.</ListGroup.Item>
          <AddComment asin={props.idBook} />
        </>
      )}
      {isLoading === true && (
        <div>
          <Spinner animation="border" variant="success" />
        </div>
      )}
      {isError === true && (
        <div>
          <Alert>Qualcosa è andato storto</Alert>
        </div>
      )}
      {comments.length > 0 && (
        <>
          <CommentList arrComments={comments} />
          <AddComment asin={props.idBook} />
        </>
      )}
    </ListGroup>
  );
};

export default CommentArea;
