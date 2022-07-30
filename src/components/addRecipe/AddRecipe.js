import React, { useState, useRef } from "react";
import Comment from "./Comment";

function AddRecipe() {
  const formReset = useRef(null);

  const [comments, setComments] = useState([]);

  const [newObj, setNewObj] = useState({
    name: "",
    title: "",
    area: "",
    comment: "",
    emailAddress: "",
  });

  function handleChange(event) {
    setNewObj({ ...newObj, [event.target.name]: event.target.value });
  }

  function handleAddSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:8004/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
      .then((response) => response.json())
      .then((newdata) => setComments([...comments, newdata]));

    // formReset.current.reset();
    setNewObj({
      name: "",
      title: "",
      area: "",
      comment: "",
      emailAddress: "",
    });
  }

  return (
    <div
      style={{
        backgroundColor: "grey",
        color: "black",
        paddingRight: 70 + "px",
        display: "flex",
      }}
    >
      <div className="poemContainer">
        <Comment comments={comments} setComments={setComments} />
      </div>
      <div style={{ width: 800 + "px" }}>
        <form
          onSubmit={handleAddSubmit}
          className="new-poem-form"
          // ref={formReset}
        >
          <div style={{ marginLeft: 10 + "px" }}>
            <h2>New Comment</h2>
          </div>

        
          <br />

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Enter your Name:</label>
            <div className="col-sm-8">
              <input
              
                required
                type="text"
                className="form-control"
                value={newObj.name}
                name="name"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Email address: </label>
            <div className="col-sm-8">
              <input
                required
                type="text"
                className="form-control"
                value={newObj.email}
                name="emailAddress"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Dessert title :</label>
            <div className="col-sm-8">
              <input
                required
                type="text"
                className="form-control"
                value={newObj.title}
                name="title"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Dessert origin:</label>
            <div className="col-sm-8">
              <input
                required
                type="text"
                className="form-control"
                value={newObj.area}
                name="area"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-4">
            <label className="col-sm-4 col-form-label">Comments:</label>
            <div className="col-sm-8">
              <textarea
                required
                className="form-control"
                value={newObj.comment}
                name="comment"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div>
            <button
              style={{ backgroundColor: "greenyellow", marginLeft: 100 + "px" }}
            >
              Add Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddRecipe;
