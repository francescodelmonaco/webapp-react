import axios from "axios";
import { useState, useEffect } from "react";
import FilmCard from "../components/FilmCard";

// chiamata api con axios per stampare tutte le film cards nella home page aiutandoci con map per automatizzare

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    // chiamata fetch
    const fetchFilms = () => {
        axios.get("http://localhost:3000/movies")
            .then((res) => { setMovies(res.data) })
            .catch((error) => { console.log(error) })
    };

    // funzione da richiamare dentro return
    const renderMovies = () => {
        return (
            movies.map((movie) => {
                return (
                    <div className="container" key={movie.id}>
                        <FilmCard movie={movie} />
                    </div>
                )
            })
        )
    };

    useEffect(fetchFilms, []);

    return (
        <>
            <h1 className="text-center py-3">Home Page</h1>

            <div>
                {renderMovies()}
            </div>
        </>
    );
};