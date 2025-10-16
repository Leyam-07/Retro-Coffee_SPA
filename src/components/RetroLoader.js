import React from "react";

const RetroLoader = ({
  size = "medium",
  text = "LOADING...",
  showText = true,
  className = "",
}) => {
  const sizeClasses = {
    small: "retro-loader-small",
    medium: "retro-loader-medium",
    large: "retro-loader-large",
  };

  const classes = ["retro-loader-container", sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div className="retro-loader"></div>
      {showText && <p className="retro-loader-text">{text}</p>}
    </div>
  );
};

export default RetroLoader;
