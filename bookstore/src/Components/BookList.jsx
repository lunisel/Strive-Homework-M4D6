import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  };

  render() {
    return (
      <Container fluid>
        <h1>Latest Releases</h1>
        <Row>
          <Col xs={12} md={8}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
            <Row>
              {this.props.books
                .filter((book) =>
                  book.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((book) => (
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    className="my-1"
                    key={book.asin}
                    style={{ height: "25rem" }}
                    onClick={() => {
                      this.setState({
                        selectedBook: book,
                      });
                    }}
                  >
                    <SingleBook b={book} />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <h3>Comments:</h3>
            {this.state.selectedBook && (
              <CommentArea b={this.state.selectedBook} />
            )}
          </Col>
        </Row>
        <Row></Row>
      </Container>
    );
  }
}

export default BookList;
