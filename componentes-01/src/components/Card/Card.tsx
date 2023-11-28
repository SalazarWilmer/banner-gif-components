// Card.tsx
import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";

interface NFT {
  name: string;
  description: string;
  image: string;
  assetId: string;
  collection: string;
  external_url: string;
}

interface CardProps {
}

const nftImageUrls = [
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/8a4c280e08210a380ad4c4dc1a6ade3b0d41e494dd27e5b659b3e9a91051a858.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/invisible.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/captain.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/c74717a8e6603ce582ef6337e7d623cc956e0241ad48f52e076367d1276e18ff.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/d5aafe2cbe44487556bdb09bf1046baaeb46c9303dc8f88b30bc3d0b0364a29e.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/0c40b6a9906a151101b624b4887321e014bd4f3a7f065b76103912497572beb0.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/d8c44afb5278ddfcacf4be8c136c719f08b98558e52dae8feb6c5a625d4272b1.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/df87c3472112f486235e9c437f8cf8b63a06b9a6ef6c6817d284661fc3dbe390.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/467fe270fc740acb34e01de6ebbd35b9ceb15c10b187e055225d9d9ed2fc20a6.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/ae1ef7012dfdb0882f2077ed5f6362cc123abe0ea334d8e42cd2cdb75972b2d7.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/3e96261b47472258a96fe45f5f3bbabc7ebfbca79ea55437e65971a224659a67.png",
];

const favoriteNFTs: NFT[] = nftImageUrls.map((url, index) => ({
  name: `Rusty Robot #${index.toString().padStart(5, '0')}`,
  description: "A collection of 11,111 unique Rusty Robot NFT art pieces on the IOTA network.",
  image: `https://rrcc.mypinata.cloud/ipfs/${url}`,
  assetId: "rusty",
  collection: "Rusty Robot Country Club",
  external_url: "https://rustyrobot.io/collections/RRCC/0"
}));

const combinedNFTs = favoriteNFTs.concat(
  nftImageUrls.map((url, index) => ({
    name: `Rusty Robot #${index.toString().padStart(5, '0')}`,
    description: "A collection of 11,111 unique Rusty Robot NFT art pieces on the IOTA network.",
    image: `https://rrcc.mypinata.cloud/ipfs/${url}`,
    assetId: "rusty",
    collection: "Rusty Robot Country Club",
    external_url: "https://rustyrobot.io/collections/RRCC/0"
  }))
);

const Card: React.FC<CardProps> = ({ }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentNFTIndex, setCurrentNFTIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isFavorite && combinedNFTs && combinedNFTs.length > 1) {
      interval = setInterval(() => {
        setCurrentNFTIndex((prevIndex) => (prevIndex + 1) % combinedNFTs.length);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isFavorite, combinedNFTs]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const cardClassName = isFavorite ? styles.favoriteCard : styles.card;

  const nftToDisplay = combinedNFTs ? combinedNFTs[currentNFTIndex] : null;
  const imageUrl = nftToDisplay ? nftToDisplay.image : "";

  return (
    <div className={styles.container}>
      <div className={cardClassName}>
        <img className={isFavorite ? styles.isFavorite : styles.imgGif} src={imageUrl} alt="NFT" />
        {nftToDisplay && (
          <div className={styles.nftInfo}>
            <h5>{nftToDisplay.name}</h5>
            <p>{nftToDisplay.description}</p>
          </div>
        )}
        <button className={styles.buttonFav} onClick={toggleFavorite}>
          {isFavorite ? "GIF" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default Card;
