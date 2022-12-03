import Web3 from "web3";
import zkFreelanceAbi from "../../abi/zkFreelanceAbi.json";

const ClientPage = () => {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(
    zkFreelanceAbi,
    "0xE4109736C51831Ce5daeCfcc5D94E8E57E57E843"
  );
  const stakeClientAmount = async (value) => {
    try {
      await contract.methods
        .stake()
        .send({ from: currentAccount, value: value });
    } catch (error) {
      console.log(error);
    }
  };

  const approve = async (lowResImageCID) => {
    try {
      const ogImageCID = await contract.methods
        .verifyProof(lowResImageCID)
        .send({ from: currentAccount });
      return ogImageCID;
    } catch (error) {
      console.log(error);
    }
    return null;
  };
  return <div>ClientPage</div>;
};

export default ClientPage;
