import { Button, ListGroup } from "react-bootstrap";

const deleteComment = async (asin, fetchBook) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjlkNmIzNTgxNzAwMTVjMjI3NDEiLCJpYXQiOjE2MjYwOTE1NzAsImV4cCI6MTYyNzMwMTE3MH0.DQ1Z-BAdJ47jnBYGg3SUxRfwekU2t4nASPSH90pK6-k",
        },
      }
    );
    if (response.ok) {
      alert("comment deleted!");
      fetchBook();
    } else {
      alert("comment NOT deleted!");
    }
  } catch (error) {
    alert("comment NOT deleted!");
  }
};

const SingleComment = (prop) => (
  <ListGroup.Item>
    {prop.comment.comment}
    <Button
      variant="danger"
      className="ml-2"
      onClick={() => deleteComment(prop.comment._id, prop.fetchBook)}
    >
      D
    </Button>
  </ListGroup.Item>
);

export default SingleComment;
