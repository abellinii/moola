pragma solidity ^0.5.0;


import "./MintableERC20.sol";



contract MockcUSD is MintableERC20 {

    uint256 public decimals = 18;
    string public symbol = "cUSD";
    string public name = "Celo cUSD Stable Coin";
}