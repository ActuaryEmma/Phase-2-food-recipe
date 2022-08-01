import React from "react";
import page from "../images/page.jpg";
import {useNavigate} from "react-router-dom"



function Home() {

  const history = useNavigate();

  function handleClick (path){
    history(path)

  }

  return (
   
       <div>
      <div className="p-3 mb-2 bg-light ">
      <figure className="container position-relative  d-flex justify-content-around align-items-center ">
        <img
          src={page}
          id="homepage"
          className="img-fluid "
          style={{ margin: `${50}px` }}
          alt="homepage"
        />
        <div>
          <figcaption className="hometitle">
            The best part of dinner is the dessert, and it usually arrives when
            you can't eat anymore
           
             <button  onClick= { () => handleClick("/getrecipes")}className="btn btn-info">Get Recipe</button>
          </figcaption>
          
          
        </div>
      </figure>
    </div>
    
    </div>
    
   
      
   
  );
}

export default Home;
