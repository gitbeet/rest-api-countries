import "../css/Header.css";
import DarkModeButton from "./DarkModeButton";
import { FaGlobeAmericas } from "react-icons/fa";

interface Props {
  toggleMode: () => void;
  darkMode: boolean;
}

const Header = ({ toggleMode, darkMode }: Props): JSX.Element => {
  return (
    <div
      className={`${
        darkMode
          ? "header box-shadow color-white bg-dark"
          : "header color-very-dark bg-white box-shadow"
      }`}
    >
      <h1 className="text-lg text-bold">
        <span className="logo-small">Country </span>
        <span>
          Inf
          <span className="text-md"></span>
          <FaGlobeAmericas className="logo-icon" />
        </span>
      </h1>
      <DarkModeButton toggleMode={toggleMode} darkMode={darkMode} />
    </div>
  );
};

export default Header;
