import axios from "axios";
import { useState, useEffect, useContext } from "react";
import FilmCard from "../components/FilmCard";
import GlobalContext from "../contexts/globalContext";

// chiamata api con axios per stampare tutte le film cards nella home page aiutandoci con map per automatizzare
export default function HomePage() {
    const [movies, setMovies] = useState([]);

    const { setIsLoading } = useContext(GlobalContext);

    // chiamata fetch
    const fetchFilms = () => {
        setIsLoading(true)

        axios.get("http://localhost:3000/movies")
            .then((res) => { setMovies(res.data) })
            .catch((error) => { console.log(error) })
            .then(() => setIsLoading(false));
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
            <h1 className="text-center py-3">Film List</h1>

            <div>
                {renderMovies()}
            </div>
        </>
    );
};