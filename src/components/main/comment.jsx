import { useContext } from "react";
import { DataContext } from "../../context";

const Comment = () => {
  const { getSubmitInputValues } = useContext(DataContext);
  return (
    <div className="comment">
      <h2>Комментарий</h2>
      <div className="comment__box">
        <textarea
          name="comment"
          placeholder="Есть уточнения?"
          onChange={(event) =>
            getSubmitInputValues({ comment: event.target.value })
          }
        ></textarea>
      </div>
    </div>
  );
};

export default Comment;
