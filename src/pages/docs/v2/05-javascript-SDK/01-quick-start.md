---
title: SDK Quick start
tags: SDK, developer-guides, documentation
---

The OMGSwap SDK exists to help developers build on top of OMGSwap. It's designed to run in any environment that can execute JavaScript (think websites, node scripts, etc.). While simple enough to use in a hackathon project, it's also robust enough to power production applications.

# Installation

The easiest way to consume the SDK is via NPM. To install it in your project,
Simply run

Ethereum Chain:

`yarn add @omgswap/sdk` (or `npm install @omgswap/sdk`)

Binance Smart Chain:

`yarn add @omgswap/bsc-sdk` (or `npm install @omgswap/bsc-sdk`)

# Usage

To run code from the SDK in your application, use an `import` or `require` statement, depending on which your environment supports. Note that the guides following this page will use ES6 syntax.

## ES6 (import)

Ethereum Chain:
```typescript
import { ChainId } from '@omgswap/sdk'
console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`)
```

Binance Smart Chain:
```typescript
import { ChainId } from '@omgswap/bsc-sdk'
console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`)
```
## CommonJS (require)

Ethereum Chain:
```typescript
const OMGSWAP = require('@omgswap/sdk')
console.log(`The chainId of mainnet is ${OMGSWAP.ChainId.MAINNET}.`)
```

Binance Smart Chain:
```typescript
const OMGSWAP = require('@omgswap/bsc-sdk')
console.log(`The chainId of mainnet is ${OMGSWAP.ChainId.MAINNET}.`)
```

# Reference

Comprehensive reference material for the SDK is available <Link to='/docs/v2/SDK'>here</Link>.
