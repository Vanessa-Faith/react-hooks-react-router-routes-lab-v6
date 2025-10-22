import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  
  const movies = {
    1: {
      title: "Doctor Strange",
      time: 115,
      genres: ["Action", "Adventure", "Fantasy"]
    },
    2: {
      title: "Trolls",
      time: 92,
      genres: ["Animation", "Adventure", "Comedy"]
    },
    3: {
      title: "Jack Reacher: Never Go Back",
      time: 118,
      genres: ["Action", "Thriller"]
    }
  };

  const movie = movies[id];

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </main>
    </>
  );
};

export default Movie;
