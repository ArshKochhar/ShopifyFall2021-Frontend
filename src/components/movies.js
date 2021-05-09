import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-2">
          <Row>
            <Container className="ml-2 ">
              <Card
                style={{
                  width: "20rem",
                  height: "43rem",
                  marginTop: "40px",
                  borderRadius: "30px",
                }}
              >
                <Card.Img
                  style={{ borderRadius: "30px" }}
                  src={movie.Poster}
                  alt="movie"
                />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    <span
                      style={{
                        color: "black",
                        fontWeight: "lighter",
                        fontSize: "28px",
                      }}
                    >
                      {movie.Title}
                    </span>
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    <span
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Release Date:{" "}
                    </span>
                    <span
                      style={{
                        color: "black",
                        fontWeight: "inherit",
                        fontSize: "20px",
                      }}
                    >
                      {movie.Year}
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Row>

          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
