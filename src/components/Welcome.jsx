import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function Welcome() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Welcome to EpiBook!</Alert.Heading>
        <p>
          Dive into our digital shelves and discover endless adventures, knowledge, and inspiration at your fingertips.
          Your next literary journey begins here.
        </p>
      </Alert>
    );
  }
}

export default Welcome;
