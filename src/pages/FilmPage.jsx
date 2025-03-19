import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// components
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

export default function FilmPage() {
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    // chiamata fetch
    const fetchFilm = () => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then((res) => { setMovie(res.data) })
            .catch((error) => { console.log(error) })
    };

    useEffect(fetchFilm, [id]);

    const renderReviews = () => {
        return movie.reviews?.map((review) => {
            // const { id } = review;

            return (
                <ReviewCard key={review.id} review={review} />
            );
        });
    };

    return (
        <>
            <h1 className="text-center py-3">{movie?.title}</h1>

            {/* <img src={movie?.image} alt={movie?.title} /> */}

            <section className="container">
                <h5 className="mb-3">Our community reviews:</h5>
                {renderReviews()}
            </section>

            <section className="container">
                {movie?.id && <ReviewForm movie_id={movie.id} reloadReviews={fetchFilm} />}
            </section>
        </>


    )
};