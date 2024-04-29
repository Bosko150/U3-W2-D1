import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import React from "react";
import CommentArea from "./CommentArea";

// const SingleBook = ({ book }) => {
//   return (
//     <Col xs={6} md={3} lg={2}>
//       <Card className="h-100 card">
//         <Card.Img variant="top" src={book.img} />
//         <Card.Body className="d-flex flex-column justify-content-end">
//           <Card.Title>{book.title}</Card.Title>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

// export default SingleBook;

class SingleBook extends React.Component {
  state = {
    selected: false,
  };
  handleClick = (e) => {
    if (e.target.tagName === "IMG") {
      this.setState((prevState) => ({
        selected: !prevState.selected,
      }));
    }
  };
  render() {
    const { selected } = this.state;
    return (
      <Col xs={6} md={3} lg={3}>
        <Card className={` card ${selected ? "selectedCard" : ""}`} onClick={this.handleClick}>
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
        {selected && <CommentArea book={this.props.book} />}
      </Col>
    );
  }
}

export default SingleBook;
