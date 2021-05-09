import React from "react";
import { Button, Container } from "react-bootstrap";

const deleteFavourite = () => {
  return (
    <>
      <Container style={{ marginBottom: "15px" }}>
        <Button style={{ backgroundColor: "red", borderColor: "red" }}>
          <span
            style={{ color: "white", fontWeight: "bolder" }}
            className="mr-2"
          >
            Remove
          </span>
        </Button>
      </Container>
    </>
  );
};

export default deleteFavourite;
