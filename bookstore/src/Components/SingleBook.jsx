import React from "react";
import { Card } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selected: false,
    selectedBook: null,
  };

  render() {
    return (
      <>
        <Card
          onClick={() =>
            this.setState({
              selected: !this.state.selected,
              selectedBook: <selectedBook id={this.props.b.asin} />,
            })
          }
          style={{
            border: this.state.selected ? "3px solid red" : "none",
            height: "100%",
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.b.img}
            className="img-fluid w-100"
            style={{ height: "80%" }}
          />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {this.props.b.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
