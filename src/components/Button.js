import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  ...props
}) => {
  const baseClass = "pixel-button";
  const variantClasses = {
    primary: "pixel-button-primary",
    secondary: "pixel-button-secondary",
    danger: "pixel-button-danger",
    success: "pixel-button-success",
  };
  const sizeClasses = {
    small: "pixel-button-small",
    medium: "pixel-button-medium",
    large: "pixel-button-large",
  };

  const classes = [
    baseClass,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? "pixel-button-disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
