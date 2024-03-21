import SingleComment from "./SingleComment";
const CommentList = (props) => {
  return props.arrComments.map((element, indice) => {
    return <SingleComment commento={element.comment} author={element.author} key={indice} />;
  });
};

export default CommentList;
