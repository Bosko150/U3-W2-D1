import Container from "react-bootstrap/Container";

const MyFooter = () => (
  <div className="bg-dark text-white">
    <Container fluid="xl" className="d-flex justify-content-around">
      <div className="d-flex flex-column">
        <h3>Products</h3>
        <a className="text-decoration-none text-white" href="#option">
          option1
        </a>
        <a className="text-decoration-none text-white" href="#option">
          option2
        </a>
        <a className="text-decoration-none text-white" href="#option">
          option3
        </a>
      </div>
      <div className="d-flex flex-column">
        <h3>Links</h3>
        <a className="text-decoration-none text-white" href="#option">
          option1
        </a>
        <a className="text-decoration-none text-white" href="#option">
          option2
        </a>
        <a className="text-decoration-none text-white" href="#option">
          option3
        </a>
      </div>
      <div className="d-flex flex-column">
        <h3>Contacts</h3>
        <a className="text-decoration-none text-white" href="#option">
          option1
        </a>
        <a className="text-decoration-none text-white" href="#option">
          option2
        </a>
        <a className="text-decoration-none text-white" href="#option">
          option3
        </a>
      </div>
    </Container>
  </div>
);

export default MyFooter;
