
import React, { useState, useEffect } from "react";

interface CardProps {
  images: string[]; // Array of image URLs
}

const Card: React.FC<CardProps> = ({ images }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout; // Explicitly type the interval as NodeJS.Timeout
    if (isFavorite && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000); // Change image every 1000 milliseconds
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isFavorite, images.length]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <img src={images[currentImageIndex]} alt="Avatar" />
      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default Card;
