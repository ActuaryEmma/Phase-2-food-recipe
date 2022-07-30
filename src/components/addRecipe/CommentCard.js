import React from 'react';

function CommentCard({title, name, area, comment ,comments,emailAddress, setComments, id}){

    function handleDelete(){
        fetch (`http://localhost:8004/comments/${id}`, {
            method: "DELETE"
        })
        .then((res) => res.json())
        .then( () => {
          const newData = comments.filter((data) => data.id !== id)
          setComments(newData)
          console.log(newData)
        })
        }
      



    return ( 
        <div className="card" style={{width: 18 + "rem"}}>

            <h5 className="card-header">{title}</h5>
            <div className="card-body">
            <p>Name: {name}</p>
            <p>Dessert Origin:{area}</p>
            <p>Comment: {comment}</p>
            <p>email:{emailAddress}</p>
            <button  onClick={handleDelete} type="button" className="btn btn-info"> Delete</button>
            </div>
            

        </div>
     );
}
 
export default CommentCard;