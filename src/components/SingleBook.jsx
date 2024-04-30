import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Component } from "react";

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

class SingleBook extends Component {
  render() {
    return (
      <Col xs={6} md={3} lg={3}>
        <Card
          onClick={() => {
            this.props.setNewAsin(this.props.book.asin);
          }}
          className={` card ${this.props.book.asin === this.props.selectedAsin ? "selectedCard" : ""}`}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
