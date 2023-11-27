  import React, { useState, useEffect } from "react";
  import styles from "./Card.module.scss"; 

  interface CardProps {
    images: string[]; 
  }

  const Card: React.FC<CardProps> = ({ images }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      let interval: NodeJS.Timeout;
      if (isFavorite && images.length > 1) {
        interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);
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

    
    const cardClassName = isFavorite ? styles.favoriteCard : styles.card;

    return (
      <div className={styles.container}>
      <div className={cardClassName}>
        <img className={isFavorite ? styles.isFavorite : styles.imgGif} src={images[currentImageIndex]} alt="Avatar" />
        <button className={styles.buttonFav} onClick={toggleFavorite}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
      </div>
    );
  };

  export default Card;
