import { useState } from "react";
import Web3 from "web3";
import zkFreelanceAbi from "../../abi/zkFreelanceAbi.json";
import "./clientPage.css";

const ClientPage = ({ currentAccount }) => {
  const [gigVisible, setGigVisible] = useState("");
  const [price, setPrice] = useState(0);
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(
    zkFreelanceAbi,
    "0x3B0A799CB14b3eEE0e01F32E60cf3575d8345CB6"
  );
  const stakeClientAmount = async (value) => {
    console.log(value);
    try {
      await contract.methods
        .stake()
        .send({ from: currentAccount, value: value });
    } catch (error) {
      console.log(error);
    }
  };
  const approve = async (hash) => {
    try {
      const ogImageCID = await contract.methods
        .verifyProof(
          "d04b98f48e8f8bcc15c6ae5ac050801cd6dcfd428fb5f9e65c4e16e7807340fa"
        )
        .send({ from: currentAccount });
      console.log(ogImageCID);
      return ogImageCID;
    } catch (error) {
      console.log(error);
    }
    return null;
  };
  return (
    <div>
      <div className="client-container">
        <h1 className="progress-heading">Projects in progress</h1>
        <div className="progress-container">
          <div className="progress-card">
            <div className="progress-card-header">
              <h2 className="progress-card-title">Build a DEX</h2>
            </div>
            <p className="progress-card-description">
              Build a DEX using Connext within 15 days
            </p>
            <p className="progress">Status: In progress...</p>
          </div>
        </div>
      </div>
      <button type="submit" className="gig" onClick={() => setGigVisible(true)}>
        Add new gig
      </button>
      {gigVisible && (
        <>
          <div className="gig-container">
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Description" />
            <input
              type="number"
              placeholder="Price"
              onChange={(e) => setPrice(e.value)}
            />
            <button
              type="submit"
              className="gig"
              onClick={stakeClientAmount(price)}
            ></button>
          </div>
        </>
      )}
      <button
        type="submit"
        className="gig"
        onClick={approve(
          "d04b98f48e8f8bcc15c6ae5ac050801cd6dcfd428fb5f9e65c4e16e7807340fa"
        )}
      >
        Approve
      </button>
    </div>
  );
};

export default ClientPage;
