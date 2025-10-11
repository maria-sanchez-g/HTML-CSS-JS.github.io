import { useState } from "react";
import Movie from "./Movie";

export default function MoviesList() {
  // collection of objects representing movies
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
    {
      id: 4,
      title: "Transformer",
      year: 2008,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ]);
  return (
    <div className="MoviesList componentBox">
      <ul>
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie}></Movie>
        ))}
      </ul>
    </div>
  );
}
