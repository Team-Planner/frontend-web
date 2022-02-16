import React from "react";
import { useTranslation } from "react-i18next";

interface TypographyProps {
  children: string
  size?: "sm" | "lg" | "xl",
  className?: string
}

const Typography: React.FC<TypographyProps> = ({
  children,
  size,
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={`${className} ${size}`}>
      {t(children)}
    </div>
  );
}

export default Typography;