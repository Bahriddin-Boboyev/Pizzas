import "./style.scss";
import { useNavigate } from "react-router-dom";

export const NetworkErrorRoutes = () => {
  const navigate = useNavigate();

  return (
    <div className="network_err container">
      <div className="network_err__box">
        <div>
          <lottie-player
            src="https://lottie.host/16efe69b-a500-4040-8ec1-1d4bc412645f/zNjeENhjCg.json"
            background="transparent"
            speed="1"
            style={{
              width: "100px",
            }}
            loop
            autoplay
          ></lottie-player>
        </div>
        <h5 className="">
          Oops, please check your network settings and try again.
        </h5>
      </div>
      <button className="network_err__btn" onClick={() => navigate("/")}>
        Reload
      </button>
    </div>
  );
};
