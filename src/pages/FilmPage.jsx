import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../contexts/globalContext";

// components
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

export default function FilmPage() {
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const { setIsLoading } = useContext(GlobalContext);

    // chiamata fetch
    const fetchFilm = () => {
        setIsLoading(true);

        axios.get(`http://localhost:3000/movies/${id}`)
            .then((res) => { setMovie(res.data) })
            .catch((error) => { console.log(error) })
            .then(() => setIsLoading(false))
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

            <div className="container">
                <div className="card p-2 mb-4">
                    <div className="row g-3">
                        <div className="col-3">
                            <img src={movie?.image} className="card-img-top rounded" alt={movie?.title} />
                        </div>

                        <div className="col-9">
                            <div className="card-body">
                                <h5 className="card-title">{movie?.title}</h5>
                                <span><strong>{movie?.director}</strong></span>
                                <br />
                                <span>{movie?.release_year}</span>
                                <p className="card-text">{movie?.abstract}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="container">
                <h5 className="mb-3">Le recensioni della nostra community:</h5>
                {renderReviews()}
            </section>

            <section className="container">
                {movie?.id && <ReviewForm movie_id={movie.id} reloadReviews={fetchFilm} />}
            </section>
        </>


    )
};