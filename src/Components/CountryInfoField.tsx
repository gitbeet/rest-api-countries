import "../css/CountryInfoField.css";

interface Props {
  name: string;
  value: string;
}

const CountryInfoField = ({ name, value }: Props) => {
  return (
    <p className="country-info-field">
      <span className="text-bold">{name}: </span>
      <span>{value}</span>
    </p>
  );
};

export default CountryInfoField;
