import React from "react";

const Card = ({
  title,
  children,
  variant = "default",
  className = "",
  imageUrl = null,
  imageAlt = "",
  ...props
}) => {
  const baseClass = "pixel-card";
  const variantClasses = {
    default: "",
    highlight: "pixel-card-highlight",
    dark: "pixel-card-dark",
  };

  const classes = [baseClass, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {imageUrl && (
        <div className="pixel-card-image">
          <img src={imageUrl} alt={imageAlt} />
        </div>
      )}
      {title && <h3 className="pixel-card-title">{title}</h3>}
      <div className="pixel-card-content">{children}</div>
    </div>
  );
};

export default Card;
