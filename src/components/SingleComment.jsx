import ListGroup from "react-bootstrap/ListGroup";

function SingleComment(props) {
  return (
    <ListGroup.Item>
      {props.author}:{props.commento}
    </ListGroup.Item>
  );
}

export default SingleComment;
