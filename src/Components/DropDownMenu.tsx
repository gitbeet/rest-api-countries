import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "../css/DropDownMenu.css";
import Backdrop from "./Backdrop";

interface Props {
  darkMode: boolean;
  handleRegion: (val: string) => void;
  regionList: string[];
  region: string;
}

const DropDownMenu = ({
  darkMode,
  handleRegion,
  regionList,
  region,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`${
          darkMode ? "color-white bg-dark box-shadow " : "bg-light box-shadow "
        } select-region`}
      >
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="select-region-header"
        >
          <div className="select-region-header-text">{region} </div>
          <div
            className={` ${
              darkMode ? "color-light" : "color-super-dark "
            } select-region-chevron`}
          >
            {isOpen ? (
              <FaChevronUp className="select-region-icon" />
            ) : (
              <FaChevronDown className="select-region-icon" />
            )}
          </div>
        </div>

        <div
          className={`${darkMode ? "color-white bg-dark " : "bg-light "} ${
            isOpen
              ? "select-region-options-container "
              : "select-region-options-container-hidden "
          }`}
        >
          {regionList.map((r, index) => {
            return r !== region ? (
              <div
                className={`${
                  darkMode
                    ? "select-region-option-dark"
                    : "select-region-option-light"
                } select-region-option`}
                onClick={() => {
                  setIsOpen(false);
                  handleRegion(r);
                }}
                key={index}
              >
                {r}
              </div>
            ) : null;
          })}
        </div>
      </div>
      {isOpen ? <Backdrop onClick={() => setIsOpen(false)} /> : null}
    </>
  );
};
export default DropDownMenu;
