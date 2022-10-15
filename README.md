# arbitrum-hop

## TODO:
1. Fix rollup configuration for typescript
2. Fix uniswap integration

## Flow
1. Widget is implemented on the site
2. User connects their wallet
3. User chooses fromChain, toChain, fromToken, toToken, amount.
4. If tokens are different then a swap will be made on blockchain destination. Uniswap API is called and the amount of tokens that the user will get is displayed
5. If user has not native tokens for gas on destination chain, then a message is displayed to the user and the user will be charge with some native tokens from origin chain and destination chain would be funded with ether.
6. User swaps tokens
7. Tokens are sent to a destination contract, that contract makes the swap and sends the tokens to the user wallet (same address as from address)

use chainlink automation for launch the swap

