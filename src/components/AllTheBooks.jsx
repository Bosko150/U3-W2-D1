import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import horror from "../books/horror.json";

const AllTheBooks = () => {
  return (
    <Container>
      <Row className="g-3">
        {horror.map((book) => (
          <Col key={`book-${book.asin}`} xs={6} md={3} lg={2}>
            <Card className="h-100">
              <Card.Img variant="top" className="img-fluid" src={book.img} />
              <Card.Body className="d-flex flex-column justify-content-end ">
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  {book.category} - {book.price}$
                </Card.Text>
                <Button variant="primary">Buy now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
