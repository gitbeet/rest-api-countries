import "../css/Button.css";

interface Props {
  content: any;
  onClick: () => void;
  darkMode: boolean;
}

const Button = ({ content, onClick, darkMode }: Props): JSX.Element => {
  return (
    <div
      className={`${
        darkMode
          ? "color-light bg-dark button-component-dark"
          : " bg-white button-component-light"
      }  box-shadow button-component`}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export default Button;
