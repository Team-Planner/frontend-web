import React, { ReactNode } from "react";
import Spinner from "../Spinner/Spinner";
import "./Button.scss"

interface ButtonProps {
  children: ReactNode,
  onClick: () => void,
  loading?: boolean
  size?: "sm" | "lg" | "xl"
  className?: string,
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  size,
  onClick,
  className
}) => {
  return (
    <div onClick={() => onClick()} className={`button ${className}`}>
      {children}
      {/* {true && <Spinner size="sm"/>} */}
    </div>
  );
}

export default Button;