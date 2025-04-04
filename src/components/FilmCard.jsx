import { Link } from "react-router-dom";

export default function FilmCard({ movie }) {

    const { id, title, director, release_year, abstract, image } = movie;

    return (
        <div className="card p-2 mb-4">
            <div className="row g-3">
                <div className="col-3">
                    <img src={image} className="card-img-top rounded" alt={title} />
                </div>

                <div className="col-9">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <span><strong>{director}</strong></span>
                        <br />
                        <span>{release_year}</span>
                        <p className="card-text">{abstract}</p>
                        <Link to={`movies/${id}`} className="btn btn-primary">Scopri di più</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};