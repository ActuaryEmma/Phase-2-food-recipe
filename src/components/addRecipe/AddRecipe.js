import React, { useState } from "react";
import Comment from "./Comment";

function AddRecipe() {
 
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

    
    
    
  }

  return (
    <div style={{ backgroundColor: "grey" ,color: "black" , paddingLeft: 60 + "px" }}>
      <div class="">
        <form onSubmit={handleAddSubmit} className="new-poem-form">
          <h2>New Recipe</h2>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Enter your Name:</label>
            <div class="col-sm-8">
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

          <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Email address: </label>
            <div class="col-sm-8">
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

          <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Dessert title :</label>
            <div class="col-sm-8">
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

          <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Dessert origin:</label>
            <div class="col-sm-8">
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

          <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Comments :</label>
            <div class="col-sm-8">
              <textarea
                required
                className="form-control"
                value={newObj.comment}
                name="comment"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div style={{marginLeft: 220+ "px"}}>
          <input  style={{backgroundColor: "greenyellow"}} placeholdertype="submit" value="Add Comment" />
          </div>

          
        </form>
      </div>

      <div>
        <Comment />
      </div>
    </div>
  );
}
export default AddRecipe;
