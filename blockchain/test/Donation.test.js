const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Donation Contract", function () {
  it("Should accept donations and update balance", async function () {
    const Donation = await ethers.getContractFactory("Donation");
    const donation = await Donation.deploy();
    const [owner, donor] = await ethers.getSigners();

    await donation.connect(donor).donate({ value: ethers.parseEther("1") });

    const balance = await donation.getContractBalance();
    expect(balance).to.equal(ethers.parseEther("1"));
  });
});
