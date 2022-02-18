import classNames from "classnames";
import React, { ReactNode } from "react";
import Spinner from "../Spinner/Spinner";
import "./Button.scss"

interface ButtonProps {
  children: ReactNode,
  onClick: () => void,
  loading?: boolean
  size?: "sm" | "md" | "lg" | "xl",
  type?: "outlined" | "filled" | "transparent",
  className?: string,
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  size = "md",
  type = "transparent",
  onClick,
  className
}) => {
  return (
    <div onClick={() => onClick()} className={classNames(
      "button",
      "button-" + type,
      "button-" + size,
      className
    )}>
      {children}
      {loading && <Spinner size="sm"/>}
    </div>
  );
}

export default Button;