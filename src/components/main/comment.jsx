import React from "react";

const Comment = () => {
  return (
    <div className="comment">
      <h2>Комментарий</h2>
      <div className="comment__box">
        <textarea name="comment" placeholder="Есть уточнения?"></textarea>
      </div>
    </div>
  );
};

export default Comment;
