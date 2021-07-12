import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [], // comments will go here
    isLoading: true,
    isError: false,
  };

  fetchBook = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.b.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjlkNmIzNTgxNzAwMTVjMjI3NDEiLCJpYXQiOjE2MjYwOTE1NzAsImV4cCI6MTYyNzMwMTE3MH0.DQ1Z-BAdJ47jnBYGg3SUxRfwekU2t4nASPSH90pK6-k",
          },
        }
      );
      this.setState({
        id: this.props.b.asin,
      });
      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments: comments, isLoading: false, isError: false });
      } else {
        console.log("error");
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  componentDidMount = async () => {
    this.fetchBook();
  };

  componentDidUpdate = (prevProp, prevState) => {
    if (prevProp.b.asin !== this.props.b.asin) {
      this.fetchBook();
    }
  };

  render() {
    return (
      <div>
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.b.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
