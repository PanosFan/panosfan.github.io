import "./Button.scss";

const Button = ({ text = "Click me" }) => {
  return <button className="mainBtn">{text}</button>;
};

export default Button;
