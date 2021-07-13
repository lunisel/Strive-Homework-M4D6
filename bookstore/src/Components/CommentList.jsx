import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = (prop) => (
  <ListGroup style={{ color: "black" }}>
    {prop.commentsToShow.map((comment) => (
      <SingleComment
        fetchBook={prop.fetchBook}
        comment={comment}
        key={comment._id}
      />
    ))}
  </ListGroup>
);

export default CommentList;
