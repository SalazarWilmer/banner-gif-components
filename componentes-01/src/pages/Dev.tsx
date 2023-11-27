import Card from  "./../components/Card/Card";


import Banner from "../components/Banner/Banner";

function Dev() {

  const imageUrl = 'https://bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq.ipfs.dweb.link/8a4c280e08210a380ad4c4dc1a6ade3b0d41e494dd27e5b659b3e9a91051a858.png';

  const images = [imageUrl];
  return (
    <div>
      <div className="section">


        <Card images={images} />
      </div>
        
    
        <Banner/>



    </div>
  );
}

export default Dev;
