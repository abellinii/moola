pragma solidity ^0.5.0;


import "./MintableERC20.sol";



contract MockCELO is MintableERC20 {

    uint256 public decimals = 18;
    string public symbol = "CELO";
    string public name = "Celo Native Token";
}