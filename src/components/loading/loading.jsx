import "./style.scss";
import { ThreeDots } from "react-loader-spinner";

const Loading = ({ visible, global }) => {
  console.log(global);
  return (
    <div className={`loading__visible ${global ? "global-loading" : ""}`}>
      <ThreeDots
        height="150"
        width="150"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ marginTop: "10%" }}
        visible={visible ? visible : false}
      />
    </div>
  );
};

export default Loading;
