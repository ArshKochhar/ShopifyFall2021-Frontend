import React from "react";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  Image,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const SearchBox = (props) => {
  return (
    <div className="">
      <Navbar
        style={{ backgroundColor: "#7BB23E", height: "110px" }}
        variant="dark"
      >
        <Image src={window.location.origin + "/assets/shopicon.png"} flud />

        <Navbar.Brand
          style={{ fontSize: "45px", color: "black", fontWeight: "bolder" }}
          href="#home"
        >
          <span style={{ color: "white", fontWeight: "inherit" }}>HOPI</span>
          NATION
        </Navbar.Brand>
        <Container>
          <input
            style={{
              width: "30rem",
              borderRadius: "30px",
              backgroundColor: "#141414",
              borderColor: "#141414",
              color: "#7BB23E",
            }}
            className="form-control ml-auto"
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder="Search for Movies..."
          ></input>
        </Container>
      </Navbar>
    </div>
  );
};

export default SearchBox;
