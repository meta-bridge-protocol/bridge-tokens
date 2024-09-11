import { EndpointId } from '@layerzerolabs/lz-definitions'

import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

const sepoliaContract: OmniPointHardhat = {
    eid: EndpointId.SEPOLIA_V2_TESTNET,
    contractName: 'MetaDEUS',
}

const arbitrumSepoliaContract: OmniPointHardhat = {
    eid: EndpointId.ARBSEP_V2_TESTNET,
    contractName: 'MetaDEUS',
}

const config: OAppOmniGraphHardhat = {
    contracts: [
        {
            contract: sepoliaContract,
        },
        {
            contract: arbitrumSepoliaContract,
        },
    ],
    connections: [
        {
            from: sepoliaContract,
            to: arbitrumSepoliaContract,
            config: {
                // Required Send Library Address on Sepolia
                sendLibrary: "0xcc1ae8Cf5D3904Cef3360A9532B477529b177cCE",
                receiveLibraryConfig: {
                  // Required Receive Library Address on Sepolia
                  receiveLibrary: "0xdAf00F5eE2158dD58E0d3857851c432E34A3A851",
                  // Optional Grace Period for Switching Receive Library Address on Sepolia
                  gracePeriod: BigInt(0),
                },
                // Optional Send Configuration
                // @dev Controls how the `from` chain sends messages to the `to` chain.
                sendConfig: {
                  ulnConfig: {
                    // The number of block confirmations to wait on Sepolia before emitting the message from the source chain (Sepolia).
                    confirmations: BigInt(42),
                    // The address of the DVNs you will pay to verify a sent message on the source chain (Sepolia).
                    // The destination tx will wait until ALL `requiredDVNs` verify the message.
                    requiredDVNs: [
                        "0xe3F407205976D1485f4213A5A26c24Fa35021C34",
                    ],
                    // The address of the DVNs you will pay to verify a sent message on the source chain (Sepolia).
                    // The destination tx will wait until the configured threshold of `optionalDVNs` verify a message.
                    optionalDVNs: [
                    ],
                    // The number of `optionalDVNs` that need to successfully verify the message for it to be considered Verified.
                    optionalDVNThreshold: 0,
                  },
                },
                // Optional Receive Configuration
                // @dev Controls how the `from` chain receives messages from the `to` chain.
                receiveConfig: {
                  ulnConfig: {
                    // The number of block confirmations to expect from the `to` chain (Sepolia).
                    confirmations: BigInt(42),
                    // The address of the DVNs your `receiveConfig` expects to receive verifications from on the `from` chain (Sepolia).
                    // The `from` chain's OApp will wait until the configured threshold of `requiredDVNs` verify the message.
                    requiredDVNs: [
                        "0xe3F407205976D1485f4213A5A26c24Fa35021C34",
                    ],
                    // The address of the `optionalDVNs` you expect to receive verifications from on the `from` chain (Sepolia).
                    // The destination tx will wait until the configured threshold of `optionalDVNs` verify the message.
                    optionalDVNs: [
                    ],
                    // The number of `optionalDVNs` that need to successfully verify the message for it to be considered Verified.
                    optionalDVNThreshold: 0,
                  },
                },
            }
        },
        {
            from: arbitrumSepoliaContract,
            to: sepoliaContract,
            config: {
                sendLibrary: "0x4f7cd4DA19ABB31b0eC98b9066B9e857B1bf9C0E",
                receiveLibraryConfig: {
                  receiveLibrary: "0x75Db67CDab2824970131D5aa9CECfC9F69c69636",
                  gracePeriod: BigInt(0),
                },
                // Optional Send Configuration
                // @dev Controls how the `from` chain sends messages to the `to` chain.
                sendConfig: {
                  ulnConfig: {
                    confirmations: BigInt(42),
                    // The destination tx will wait until ALL `requiredDVNs` verify the message.
                    requiredDVNs: [
                        "0x0147c481f30f4EE4F747f96a78CbcE3ef0Eb5Ed4",
                    ],
                    // The destination tx will wait until the configured threshold of `optionalDVNs` verify a message.
                    optionalDVNs: [
                    ],
                    // The number of `optionalDVNs` that need to successfully verify the message for it to be considered Verified.
                    optionalDVNThreshold: 0,
                  },
                },
                // Optional Receive Configuration
                // @dev Controls how the `from` chain receives messages from the `to` chain.
                receiveConfig: {
                  ulnConfig: {
                    confirmations: BigInt(42),
                    // The `from` chain's OApp will wait until the configured threshold of `requiredDVNs` verify the message.
                    requiredDVNs: [
                        "0x0147c481f30f4EE4F747f96a78CbcE3ef0Eb5Ed4",
                    ],
                    // The destination tx will wait until the configured threshold of `optionalDVNs` verify the message.
                    optionalDVNs: [
                    ],
                    // The number of `optionalDVNs` that need to successfully verify the message for it to be considered Verified.
                    optionalDVNThreshold: 0,
                  },
                },
            }
        },
    ],
}

export default config
