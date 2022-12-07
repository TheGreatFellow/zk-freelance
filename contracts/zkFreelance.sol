// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract zkFreelance {

    string hash;
    string cid;
    address freelancer;
    
    function stake() payable external {}

    function uploadHash(string memory ogImageCid, string memory imageHash) external {
        cid = ogImageCid;
        freelancer = msg.sender;
        hash = imageHash;
    }

    function verifyProof(string memory imageHash) payable external returns (string memory) {
        require(keccak256(abi.encodePacked(imageHash)) == keccak256(abi.encodePacked(hash)), "Invalid");
        uint bal = address(this).balance;
        require(bal != 0, "Client stake is missing");
        (bool sent, bytes memory data) = freelancer.call{value: bal}("");
        require(sent, "Failed to send Ether");
        return cid;
    }

}
