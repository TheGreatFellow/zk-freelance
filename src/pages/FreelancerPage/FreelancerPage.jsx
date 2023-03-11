import React, { useState, useEffect } from "react";
import imageCompression from "browser-image-compression";
import { Web3Storage } from "web3.storage";
import Web3 from "web3";
import zkFreelanceAbi from "../../abi/zkFreelanceAbi.json";

const FreelancerPage = ({ currentAccount }) => {
  const [image, setImage] = useState(null);
  const [lowResImage, setLowResImage] = useState(null);
  const client = new Web3Storage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDllZWM5NTBGRTZlOGM2RDQ4OEMyZWNiRjY1Mjk3OTUzMDZiNTk1MTgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAwNjM1MzQ3NzAsIm5hbWUiOiJ6a0ZyZWVsYW5jZSJ9.9oun-UVXUoT1GAGIoY6uDGNVivVFJOZ5wuYCKSMzSqQ",
  });

  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(
    zkFreelanceAbi,
    "0x3B0A799CB14b3eEE0e01F32E60cf3575d8345CB6"
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
    setLowResImage(lowResImage);
  };

  const uploadToIpfs = async (ogImage) => {
    try {
      const ogImageCID = await client.put([ogImage]);
      //   const lowResImageCID = await client.put([lowResImage]);
      //   console.log(ogImageCID, lowResImageCID);
      return ogImageCID;
    } catch (error) {
      console.log(error);
    }
  };

  const uploadProof = async (ogImageCID) => {
    try {
      await contract.methods
        .uploadHash(ogImageCID, "hash")
        .send({ from: currentAccount });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {lowResImage && (
        <img src={URL.createObjectURL(image)} height="400px" alt="" />
      )}
      {lowResImage && (
        <button
          onClick={() => {
            generateProof(image).then(() => {
              uploadToIpfs(image).then((ogImageCID) => {
                uploadProof(ogImageCID);
              });
            });
          }}
        >
          Upload to FileCoin
        </button>
      )}
      {!lowResImage && <input type="file" onChange={handleImageChange} />}
    </div>
  );
};

export default FreelancerPage;
