import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <Alert variant="info">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>It's great to have you here again!</p>
      <hr />
      <p className="mb-0">Have a nice shopping!</p>
    </Alert>
  );
}

export default Welcome;
