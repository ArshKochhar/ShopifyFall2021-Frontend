import React, { useState, useEffect } from "react";

import "./App.css";
import MovieList from "./components/movies";

import SearchBox from "./components/searchBar";
import AddFavourites from "./components/addNomination";
import deleteFavourite from "./components/deleteNomination";
import gif from "./assetssrc/fav.gif";
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
  Card,
  Spinner,
} from "react-bootstrap";

const App = () => {
  //setting up hooks to save states
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setNominations] = useState([]);

  //pulling movies from the OMDB api
  const getMoviereq = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a08498fd`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  //handler for when the user needs to remove a nomination
  const removeFavouriteMovie = (movie) => {
    setSuccess("");
    const favArray = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setNominations(favArray);
    console.log(favArray.length);
  };

  //state changes when 5 movies are selected
  const [isSuccess, setSuccess] = useState("");
  //handler for when the user needs to add a nomination
  const addFavouriteMovie = (movie) => {
    if (!favourites.includes(movie)) {
      //making sure there are no duplicate movies in the nominated array
      const favArray = [...favourites, movie];
      if (favArray.length <= 5) {
        setNominations(favArray);
        if (favArray.length == 5) {
          setSuccess("5 Chosen, Success!");
        }
      }
    }
  };

  useEffect(() => {
    getMoviereq(searchValue);
  }, [searchValue]);

  return (
    <div className=" ">
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

      <Row>
        <Col sm={7}>
          <Container>
            <Row>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className=" container-fluid row  pt-4 "
              >
                <h1
                  className=""
                  style={{ fontWeight: "200", color: "#7BB23E" }}
                >
                  Movies based on your search
                </h1>
              </div>
            </Row>

            <Row>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="container-fluid row"
              >
                <MovieList
                  movies={movies}
                  favouriteComponent={AddFavourites}
                  handleFavouritesClick={addFavouriteMovie}
                />
              </div>
            </Row>
          </Container>
        </Col>
        <Col sm={5}>
          <Container
            style={{
              backgroundColor: "#7BB23E",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="pt-4  "
            >
              <h1 className="" style={{ fontWeight: "200", color: "black" }}>
                Your Nominations <br />{" "}
                <span
                  style={{ color: "white", fontSize: "40px" }}
                  className="py-2"
                >
                  {isSuccess}
                </span>
              </h1>
            </div>
            <div
              style={{
                paddingBottom: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="container-fluid row"
            >
              {" "}
              <MovieList
                style={{}}
                movies={favourites}
                handleFavouritesClick={removeFavouriteMovie}
                favouriteComponent={deleteFavourite}
                s
              />
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default App;
