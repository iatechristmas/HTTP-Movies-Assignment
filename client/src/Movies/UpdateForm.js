import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialMovie = {
  title: "",
  director: "",
  metascore: "",
  stars: [],
};

const UpdateForm = (props) => {
  const { push } = useHistory();
  const { id } = useParams();
  const [movie, setMovie] = useState(initialMovie);

  useEffect(() => {
    axios
      .get(`http://localhost:3333/movies/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const changeHandler = (ev) => {
    ev.persist();
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${id}`, movie)
      .then((res) => {
        props.setMovies(res.data);
        push(`/movie-list/${id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          <input
            type="text"
            name="title"
            onChange={changeHandler}
            placeholder="Title"
            value={movie.title}
          />
        </div>
        <div>
          <input
            type="text"
            name="director"
            onChange={changeHandler}
            placeholder="Director"
            value={movie.director}
          />
        </div>
        <div>
          <input
            type="text"
            name="metascore"
            onChange={changeHandler}
            placeholder="Metadcore"
            value={movie.metascore}
          />
        </div>
        <div>
          <input
            type="string"
            name="description"
            onChange={changeHandler}
            placeholder="Description"
            value={item.description}
          />
        </div>

        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
