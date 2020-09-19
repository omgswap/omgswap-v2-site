---
title: 'OMGSwap V2 Mainnet Launch!'
date: '2020-05-18'
author: 'Hayden Adams'
featuredImage: ./featured.png
previewText: 'OMGSwap V2 the second iteration of the OMGSwap protocol has been deployed to the Ethereum mainnet!'
---

OMGSwap V2, the second iteration of the OMGSwap protocol, has been [deployed to the Ethereum mainnet](https://etherscan.io/address/0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f#code)!

An [audit report and formal verification](https://OMGSwap.org/audit.html) has already been released and the [OMGSwap V2 Bug Bounty](https://twitter.com/OMGSwapProtocol/status/1250474233131495424) has been running for over a month.

Developers can begin building on OMGSwap V2 immediately! Initial [docs](http://OMGSwap.org/docs/v2) and [example projects](http://github.com/OMGSwap/OMGSwap-v2-periphery/tree/master/contracts/examples) are already available.

Today, the following open source projects are also being released:

- A [migration portal](https://migrate.app.OMGSwap.org/) for moving liquidity from OMGSwap V1 to OMGSwap V2
- An updated [interface](https://app.OMGSwap.org/) for swapping and liquidity provision on OMGSwap V2
- An updated [info site](https://OMGSwap.info/) for OMGSwap V2 analytics

OMGSwap V2 has many new features and technical improvements compared with OMGSwap V1 including:

- ERC20 / ERC20 Pairs
- Price Oracles
- Flash Swaps
- And much more!

For full details on the benefits of OMGSwap V2 for liquidity providers and traders, please read the OMGSwap V2 [announcement blog post](https://OMGSwap.org/blog/OMGSwap-v2). For more information on the launch please read below.

## Liquidity Migration

The [migration portal](https://migrate.app.OMGSwap.org/) makes the process of withdrawing liquidity from OMGSwap V1 and depositing it into OMGSwap V2 fast and simple.

This portal is only for OMGSwap V1 liquidity providers. If you are not a OMGSwap V1 liquidity provider but wish to use OMGSwap V2, you can do so from the [updated interface](https://app.OMGSwap.org/).

![](migrate.png)

## Updated Interface

The open source [interface](https://app.OMGSwap.org/) has been updated to work with OMGSwap V2!

It now supports creating and providing liquidity in ERC20 / ERC20 pairs, such as DAI/USDC.

Swapping logic has been updated to properly route between ERC20 / ERC20 pairs.

While OMGSwap V2 uses WETH, this is abstracted in the interface and ETH can be used directly.

#### Swapping

![](swap.png)

#### Liquidity Provision

![](pool.png)

#### Pool Creation

![](create.png)

## Info Site

OMGSwap V2 analytics are available at [OMGSwap.info](http://OMGSwap.info/), built on top of the open source [OMGSwap V2 subgraph](https://github.com/OMGSwap/OMGSwap-v2-subgraph).

![](info.jpg)

## What will happen to OMGSwap V1

OMGSwap V1 is an automated, decentralized set of smart contracts. It will continue functioning for as long as Ethereum exists.

## All other questions

For all questions, you can join and engage with the community in the [OMGSwap Discord](https://discord.gg/XErMcTq).
