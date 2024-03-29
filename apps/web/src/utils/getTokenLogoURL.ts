import { getAddress } from '@ethersproject/address'
import memoize from 'lodash/memoize'
import { ChainId, Token } from '@pancakeswap/sdk'

const mapping = {
  [ChainId.PULSE]: 'pulsechain',
  // [ChainId.ETHEREUM]: 'ethereum',
  [ChainId.ETHEREUM]: 'polygon',
}
const getTokenLogoURL = (token?: Token) => {
  if (token && mapping[token.chainId]) {
    return `/images/tokens/${token.address}.png`
  }
  return null
}
export const getTokenLogoURLByAddress = memoize(
  (address?: string, chainId?: number) => {
    if (address && chainId && mapping[chainId]) {
      return `https://assets-cdn.trustwallet.com/blockchains/${mapping[chainId]}/assets/${getAddress(address)}/logo.jpg`
    }
    return null
  },
  (address, chainId) => `${chainId}#${address}`,
)

export default getTokenLogoURL
