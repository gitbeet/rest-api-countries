import "../css/Loading.css";
import { PulseLoader } from "react-spinners";

const Loading = (): JSX.Element => {
  return (
    <div className="loading">
      <div className="loader">
        <PulseLoader color="#36d7b7" />
      </div>
    </div>
  );
};

export default Loading;
