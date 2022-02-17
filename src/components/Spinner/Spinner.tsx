import classNames from "classnames";
import React from "react";
import "./Spinner.scss"

interface SpinnerProps {
  size: "sm" | "md" | "lg" | "xl" | "xxl"
  className?: string
}

const Spinner: React.FC<SpinnerProps> = ({
  size,
  className
}) => {
  return (
    <div className={className}>
      <div className={classNames(
        "spinner",
        size
      )}></div>
    </div>
  );
}

export default Spinner;