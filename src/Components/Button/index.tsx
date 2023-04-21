import Style from "./Button.module.scss";

const Button = ({children, onClick}: any) => {
  return <button onClick={onClick} className={Style.botao}>{children}</button>;
};

export default Button;
