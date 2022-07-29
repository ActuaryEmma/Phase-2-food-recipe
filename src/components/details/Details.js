import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

const SEARCH_MEAL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
function Details(){


    const[image, setImage]= useState("")
    const[title, setTitle]= useState("")
    const[category, setCategory]= useState("")
    const[instructions, setInstructions]= useState("")
    const[area, setArea]= useState("")

    let {mealId} = useParams()

    const actualSearch = SEARCH_MEAL + mealId

    const mealFetcher = ()=> {
        fetch(actualSearch)
        .then((res) => res.json())
        .then((data) => {
           const mealItem = data.meals[0];
           setTitle(mealItem.strMeal)
           setCategory(mealItem.strCategory)
           setInstructions(mealItem.strInstructions)
           setImage(mealItem.strMealThumb)
           setArea(mealItem.strArea)
          
        })
    }
    useEffect(mealFetcher, [])

    
    return ( 
        <div className="container">
            <center>
            <img src={image}  style={{height: 200+  'px', width: 200+ 'px'}} alt=""/>
            <h4>{title}</h4>
            <h6 className="badge bg-success">{category}</h6>
            <p>{area}</p>
            <p>{instructions}</p>
            </center>

        </div>
     );
}
 
export default Details;