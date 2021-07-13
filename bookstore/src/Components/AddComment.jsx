import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    commentForm: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.commentForm),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjlkNmIzNTgxNzAwMTVjMjI3NDEiLCJpYXQiOjE2MjYwOTE1NzAsImV4cCI6MTYyNzMwMTE3MH0.DQ1Z-BAdJ47jnBYGg3SUxRfwekU2t4nASPSH90pK6-k",
          },
        }
      );
      if (response.ok) {
        // the comment has been sent succesfully!!
        alert("Comment was sent!");

        this.setState({
          commentForm: {
            comment: null,
            rate: null,
            elementId: this.props.asin,
          },
        });
        this.props.fetchBook();
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.sendComment}>
          <Form.Group>
            <Form.Label>Write your comment here:</Form.Label>
            <Form.Control
              type="textarea"
              rows={3}
              placeholder="Add comment here"
              value={this.state.commentForm.comment}
              onChange={(e) =>
                this.setState({
                  commentForm: {
                    ...this.state.commentForm,
                    comment: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Select Rating:</Form.Label>
            <Form.Control
              as="select"
              value={this.state.commentForm.rate}
              onChange={(e) =>
                this.setState({
                  commentForm: {
                    ...this.state.commentForm,
                    rate: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddComment;
