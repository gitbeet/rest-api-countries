import "../css/Header.css";
import { FaRegMoon } from "react-icons/fa";

interface Props {
  toggleMode: () => void;
  darkMode: boolean;
}

const Header = ({ toggleMode, darkMode }: Props): JSX.Element => {
  return (
    <div
      className={`${
        darkMode ? "header box-shadow color-white bg-dark" : "header box-shadow"
      }`}
    >
      <h1 className="text-md">Where in the world?</h1>
      <p className="dark-mode text-md" onClick={toggleMode}>
        <FaRegMoon />
        Dark Mode
      </p>
    </div>
  );
};

export default Header;
