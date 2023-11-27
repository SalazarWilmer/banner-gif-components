import React, { useState } from 'react';

interface NFT {
  name: string;
  description: string;
  image: string;
  assetId: string;
  collection: string;
  external_url: string;
}

const FavoriteNFTsComponent: React.FC = () => {
  const [favorites, setFavorites] = useState<NFT[]>([]);

  // Mock function to add NFTs to favorites
  const addFavorite = (nft: NFT) => {
    if (favorites.length < 10) {
      setFavorites([...favorites, nft]);
    }
  };

  // Function to render NFTs
  const renderNFTs = () => {
    return favorites.map((nft, index) => (
      <div key={index}>
        <img src={`https://rrcc.mypinata.cloud/ipfs/${nft.image.split('ipfs://')[1]}`} alt={nft.name} />
        <div>{nft.name}</div>
        {/* Add more details as needed */}
      </div>
    ));
  };

  return (
    <div>
      {renderNFTs()}
      {/* You would have an interface or form to add NFTs to favorites */}
    </div>
  );
};

export default FavoriteNFTsComponent;
