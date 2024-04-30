import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Component } from "react";
// import AllTheBooks from "./components/AllTheBooks";
// import SingleBook from "./components/SingleBook";
import horror from "./books/horror.json";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import { Col, Row } from "react-bootstrap";

class App extends Component {
  state = {
    selectedAsin: "",
  };
  setNewAsin = (asin) => {
    this.setState({ selectedAsin: asin });
  };
  render() {
    return (
      <div className="App bg-secondary">
        <MyNav brandName="EpiBook" />
        <Welcome />
        {/* <AllTheBooks /> */}
        {/* <SingleBook book={horror[0]} /> */}
        <Row>
          <Col md={8}>
            <BookList bookArray={horror} setNewAsin={this.setNewAsin} selectedAsin={this.state.selectedAsin} />
          </Col>
          <Col md={4}>
            <CommentArea selectedAsin={this.state.selectedAsin} />
          </Col>
        </Row>
        <MyFooter />
      </div>
    );
  }
}

export default App;
