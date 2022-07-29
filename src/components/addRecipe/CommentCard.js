import React from 'react';

function CommentData({title, name, area, comment}){
    return ( 
        <div class="card" style={{width: 18 + "rem"}}>

            <h5 class="card-header">{title}</h5>
            <div class="card-body">
            <p>Name: {name}</p>
            <p>Dessert Origin:{area}</p>
            <p>Comment: {comment}</p>
            </div>
            

        </div>
     );
}
 
export default CommentData;