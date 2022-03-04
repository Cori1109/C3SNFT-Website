const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const whiteList = require("src/config/whiteList.json");

const hashedAddresses = whiteList.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(hashedAddresses, keccak256, {
  sortPairs: true,
});
const root = merkleTree.getHexRoot();
console.log("merkleroot:", root);
/*
// const myAddress = "0xd136EB70B571cEf8Db36FAd5be07cB4F76905B64";
const hashedAddress = keccak256(myAddress);
const proof = merkleTree.getHexProof(hashedAddress);
const root = merkleTree.getHexRoot();

// just for front-end display convenience
// proof will be validated in smart contract as well
const valid = merkleTree.verify(proof, hashedAddress, root);

console.log(proof);
console.log(root);
console.log(valid);
*/

export function proofMerkle(myAddress) {
  let _proof;
  const hashedAddress = keccak256(myAddress);
  const proof = merkleTree.getHexProof(hashedAddress);
  const valid = merkleTree.verify(proof, hashedAddress, root);
  if (valid) {
    _proof = proof;
    console.log("Proof valid:", valid, _proof);
  }
  return _proof;
}
