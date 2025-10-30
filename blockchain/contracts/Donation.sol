// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Donation {
    struct Donor {
        address donorAddress;
        uint256 amount;
        uint256 timestamp;
    }

    mapping(address => uint256) public totalDonations;
    Donor[] public donors;
    address public owner;

    event Donated(address indexed donor, uint256 amount, uint256 timestamp);

    constructor() {
        owner = msg.sender;
    }

    function donate() external payable {
        require(msg.value > 0, "Donation must be greater than zero");
        donors.push(Donor(msg.sender, msg.value, block.timestamp));
        totalDonations[msg.sender] += msg.value;
        emit Donated(msg.sender, msg.value, block.timestamp);
    }

    function getAllDonors() external view returns (Donor[] memory) {
        return donors;
    }

    function withdraw() external {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }

    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
