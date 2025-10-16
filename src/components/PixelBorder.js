import React from "react";

const PixelBorder = ({
  children,
  color = "white",
  thickness = 4,
  animate = false,
  className = "",
  ...props
}) => {
  const style = {
    "--border-color": `var(--retro-${color})`,
    "--border-thickness": `${thickness}px`,
  };

  const classes = [
    "pixel-border",
    animate ? "pixel-border-animate" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={style} {...props}>
      {children}
    </div>
  );
};

export default PixelBorder;
