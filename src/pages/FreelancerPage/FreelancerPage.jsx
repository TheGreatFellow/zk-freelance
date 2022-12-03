import React, { useState, useEffect } from "react";
import imageCompression from "browser-image-compression";
import { Web3Storage } from "web3.storage";
import Web3 from "web3";
import zkFreelanceAbi from "../../abi/zkFreelanceAbi.json";

const FreelancerPage = ({ currentAccount }) => {
  const [image, setImage] = useState(null);
  const client = new Web3Storage({
    token: "",
  });

  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(
    zkFreelanceAbi,
    "0xE4109736C51831Ce5daeCfcc5D94E8E57E57E843"
  );

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const generateProof = async (ogImage) => {
    const lowResImage = await imageCompression(ogImage, {
      maxSizeMB: 0.01,
      maxWidthOrHeight: 480,
      useWebWorker: true,
    });
    return lowResImage;
  };

  const uploadToIpfs = async (ogImage, lowResImage) => {
    try {
      const ogImageCID = await client.put([ogImage]);
      const lowResImageCID = await client.put([lowResImage]);
      console.log(ogImageCID, lowResImageCID);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadProof = async (ogImageCID, lowResImageCID) => {
    try {
      await contract.methods
        .uploadProof(ogImageCID, lowResImageCID)
        .send({ from: currentAccount });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {image && <img src={URL.createObjectURL(image)} height="400px" alt="" />}
      {image && (
        <button
          onClick={() => {
            generateProof(image).then((lowResImage) => {
              uploadToIpfs(image, lowResImage).then(() => {
                uploadProof(image, lowResImage);
              });
            });
          }}
        >
          Upload to FileCoin
        </button>
      )}
      {!image && <input type="file" onChange={handleImageChange} />}
    </div>
  );
};

export default FreelancerPage;
