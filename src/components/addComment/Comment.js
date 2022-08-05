import React, { useEffect } from "react";
import CommentCard from "./CommentCard";

function Comment({comments, setComments}) {
  

  useEffect(() => {
    fetch("http://localhost:8004/comments")
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
       
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  
 

  return (
    <div className="">
      <h2 style={{ marginLeft: 250 + "px"}}>Comments</h2><br/>
      <div className="cardcontainer">
      {comments.map((item) => (
          <CommentCard
          id= { item.id }
          key={item.id}
            name={item.name}
            area={item.area}
            emailAddress={item.emailAddress}
            title={item.title}
            comment={item.comment} 
            comments = {comments} 
            setComments={setComments}
          />
        )
      )}
      </div>
     
    </div>
  );
}

export default Comment;
