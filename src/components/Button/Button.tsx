import React, { ReactNode } from "react";
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
    </div>
  );
}

export default Button;