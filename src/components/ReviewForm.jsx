import axios from "axios";
import { useState } from "react";

export default function ReviewForm({ movie_id, reloadReviews }) {

    //endpoint
    const endpoint = `http://localhost:3000/movies/${movie_id}/reviews`;

    // valori form review iniziali
    const initialValue = {
        name: 'User',
        text: 'Review text',
        vote: 5,
    };

    const [formData, setFormData] = useState(initialValue);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(endpoint, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(() => {
                setFormData(initialValue);

                //ricaricare le recensioni da zero
                reloadReviews();
            })
            .catch((err) => console.log(err));
    };

    const setFieldValue = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="card mb-4">
            <h5 className="pt-3 px-3">Aggiungi una recensione</h5>

            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="py-2"><strong>Name</strong></label>

                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={setFieldValue}
                        />
                    </div>

                    <div className="form-group">
                        <label className="py-2"><strong>Review text</strong></label>

                        <textarea
                            name="text"
                            className="form-control"
                            value={formData.text}
                            onChange={setFieldValue}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label className="py-2"><strong>Vote</strong></label>

                        <input
                            type="number"
                            min={1}
                            max={5}
                            name="vote"
                            className="form-control"
                            value={formData.vote}
                            onChange={setFieldValue}
                        />
                    </div>

                    <div className="pt-3">
                        <button type="submit" className="btn btn-primary">
                            Crea Recensione
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};