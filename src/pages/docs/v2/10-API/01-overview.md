---
title: API Overview
tags: api, documentation
---

This section explains the OMGSwap Subgraph and how to interact with it. The OMGSwap subgraph indexes data from the OMGSwap contracts over time. It organizes data about pairs, tokens, OMGSwap as a whole, and more. The subgraph updates any time a transaction is made on OMGSwap. The subgraph runs on [The Graph](https://thegraph.com/) protocol's hosted service and can be openly queried.

## Resources

[Subgraph Explorer](https://thegraph.com/explorer/subgraph/OMGSwap/OMGSwap-v2) - sandbox for querying data and endpoints for developers.

[OMGSwap V2 Subgraph](https://github.com/OMGSwap/OMGSwap-v2-subgraph) - source code for deployed subgraph.

## Usage

The subgraph provides a snapshot of the current state of OMGSwap and also tracks historical data. It is currently used to power [OMGSwap.info](https://OMGSwap.info/). **It is not intended to be used as a data source for structuring transactions (contracts should be referenced directly for the most reliable live data).**

## Making Queries

To learn more about querying a subgraph refer to [The Graph's documentation](https://thegraph.com/docs/introduction).

## Versions

The [OMGSwap V2 Subgraph](https://thegraph.com/explorer/subgraph/OMGSwap/OMGSwap-v2) only tracks data on OMGSwap V2. For OMGSwap V1 information see the [V1 Subgraph](https://thegraph.com/explorer/subgraph/graphprotocol/OMGSwap).
