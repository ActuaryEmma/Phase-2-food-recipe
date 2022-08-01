import React, { useEffect, useState } from "react";
import Dessert from "./Dessert";

function GetRecipes({dessert,setDessert}) {
  const [searchItem, setSearchItem] = useState("");
  const[isLoading, setIsLoading] = useState(false)
 
  

  function searchText(event) {
    console.log(event.target.value);
    setSearchItem(event.target.value);
  }

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
      .then((response) => response.json())
      .then((data) => {
        setDessert(data.meals);
        setIsLoading(true)
      });
  }, []);
  if(!isLoading){
    return <h2> Loading.... </h2>
  }else {
    return (
      <div>
        <div className="col-md-12 mb-5">
          <div className="mb-3 col-4 mx-auto text-center">
            <label className="form-lable h4">Search</label>
            <input
              type="text"
              className="form-control"
              value={searchItem}
              onChange={searchText}
            />
          </div>
        </div>
        <div className="dessertcontainer">
          {dessert
            .filter((item) => {
              if (searchItem === "") {
                return item;
              } else if (
                item.strMeal.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => {
              return (
                <Dessert
                  key={item.idMeal}
                  mealName={item.strMeal}
                  mealThumb={item.strMealThumb}
                  mealId={item.idMeal}
                  isLoading={isLoading}
                />
              );
            })}
        </div>
      </div>
    );
  }
  

  // return (
  //   <div>
  //     <div className="col-md-12 mb-5">
  //       <div className="mb-3 col-4 mx-auto text-center">
  //         <label className="form-lable h4">Search</label>
  //         <input
  //           type="text"
  //           className="form-control"
  //           value={searchItem}
  //           onChange={searchText}
  //         />
  //       </div>
  //     </div>
  //     <div className="dessertcontainer">
  //       {dessert
  //         .filter((item) => {
  //           if (searchItem === "") {
  //             return item;
  //           } else if (
  //             item.strMeal.toLowerCase().includes(searchItem.toLowerCase())
  //           ) {
  //             return item;
  //           }
  //         })
  //         .map((item) => {
  //           return (
  //             <Dessert
  //               key={item.idMeal}
  //               mealName={item.strMeal}
  //               mealThumb={item.strMealThumb}
  //               mealId={item.idMeal}
  //             />
  //           );
  //         })}
  //     </div>
  //   </div>
  // );
}

export default GetRecipes;
