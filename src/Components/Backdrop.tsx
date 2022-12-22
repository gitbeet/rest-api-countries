import "../css/Backdrop.css";

interface Props {
  onClick: () => void;
}

const Backdrop = ({ onClick }: Props) => {
  return <div onClick={onClick} className="backdrop"></div>;
};

export default Backdrop;
