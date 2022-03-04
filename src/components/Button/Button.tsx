import { ComponentPropsWithRef } from "react";
import "./Button.scss";

interface ButtonProps extends ComponentPropsWithRef<"button"> {}

const Button = (props: ButtonProps) => {
  const { className, ...rest } = props;

  return <button className={`Button ${className ?? ""}`.trimEnd()} {...rest} />;
};

export default Button;
