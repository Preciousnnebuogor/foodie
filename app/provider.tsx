"use client"

import { ReactNode } from "react"
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit"
import { WagmiProvider, http } from "wagmi"
import { celo, celoAlfajores } from "wagmi/chains"

const rainbowConfig = getDefaultConfig({
    appName: "Peerie",
    projectId: projectId,
    chains: [celo, celoAlfajores],
    ssr: true, // If your dApp uses server side rendering (SSR)
    transports: {
      [celo.id]: http(),
      [celoAlfajores.id]: http(),
    },
  })

export default function Provider(props: { children: ReactNode }) {
  return (
    <WagmiProvider config={rainbowConfig}>
      <RainbowKitProvider>
        {props.children}
        </RainbowKitProvider>
    </WagmiProvider>
  )
}
