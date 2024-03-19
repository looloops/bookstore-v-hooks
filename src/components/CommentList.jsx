import { Component } from "react";
import CommentArea from "./CommentArea";
import SingleComment from "./SingleComment";

import AddComment from "./AddComment";

class CommentList extends Component {
  render() {
    return this.props.arrComments.map((element, indice) => {
      return <SingleComment commento={element.comment} author={element.author} key={indice} />;
    });
  }
}

export default CommentList;
