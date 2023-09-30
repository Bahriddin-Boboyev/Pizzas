import "./style.scss";
import somethingWrongImg from "../img/something-wrong.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SomethingWrong = () => {
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <article className="something-wrong">
        <img src={somethingWrongImg} alt="img" />
        <h1>Oops, Something went wrong...</h1>
        <button
          className="btn"
          onClick={() => (setReload(!reload), navigate("/"))}
        >
          <i
            className={`fa-solid fa-rotate-right ${
              reload ? "rotate-icon" : ""
            }`}
          ></i>
        </button>
      </article>
    </>
  );
};
