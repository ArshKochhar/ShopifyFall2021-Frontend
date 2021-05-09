import React from "react";
import { Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const AddFavourite = (props) => {
  //This is the state that updates to disable the button, however I am running into an issue where the state doesnt update
  //once the the movie is removed from the nominations - the button remains disabled but still clickable
  //   const [grey, setGrey] = useState(false);

  //   const handleFormSubmit = (e) => {
  //     setGrey(true);
  //     e.preventDefault();
  //   };
  //   console.log(grey);
  return (
    <>
      <Container style={{ marginBottom: "15px" }}>
        <Button variant="success" className="">
          <span
            style={{ color: "white", fontWeight: "bolder" }}
            className="mr-2"
          >
            Nominate
          </span>
        </Button>
      </Container>
    </>
  );
};

export default AddFavourite;
