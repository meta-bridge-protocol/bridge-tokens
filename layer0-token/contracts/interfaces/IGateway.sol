// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IGateway {
    /// @notice Swaps a specified amount of bridged tokens to real tokens.
    /// @param amount The amount of bridged tokens to swap.
    /// @param to The recipient address of the real tokens.
    function swapToRealTo(uint256 amount, address to) external;

    function realToken() external view returns (address);
}
