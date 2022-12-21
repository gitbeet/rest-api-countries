import "../css/DarkModeButton.css";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

interface Props {
  darkMode: boolean;
  toggleMode: () => void;
}

const DarkModeButton = ({ darkMode, toggleMode }: Props) => {
  return (
    <div
      onClick={toggleMode}
      className={`${
        darkMode ? "dark-mode-container-left " : "dark-mode-container-right "
      }  dark-mode-container`}
    >
      <div
        className={`dark-mode-circle ${
          darkMode ? "dark-mode-circle-left" : "dark-mode-circle-right"
        }`}
      >
        {darkMode ? (
          <RiMoonClearFill className="dark-mode-icon" />
        ) : (
          <RiSunFill />
        )}
      </div>
    </div>
  );
};

export default DarkModeButton;
