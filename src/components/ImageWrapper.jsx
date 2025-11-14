import React from "react";

export default function ImageWrapper({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        // Fallback to a placeholder if image fails to load
        e.target.style.display = "none";
      }}
    />
  );
}
