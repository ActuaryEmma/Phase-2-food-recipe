import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

function Comment() {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8004/comments")
      .then((res) => res.json())
      .then((data) => {
        setComment(data);
       
      });
  }, []);

  
 

  return (
    <div class="">
      <h3>Comments</h3>
      <div class="cardcontainer">
      {comment.map((item) => (
          <CommentCard
          key={item.id}
            name={item.name}
            area={item.area}
            emailAddress={item.emailAddress}
            title={item.title}
            comment={item.comment}
          />
        )
      )}
      </div>
     
    </div>
  );
}

export default Comment;
