import { createContext, useContext } from "react"

const Web3Context = createContext({})

export default function Web3Provider({children}: any) {
 return (
     <Web3Context.Provider value={{test: 'Hello'}}>
         { children }
     </Web3Context.Provider>
 )

}

export function useWeb3() {
    return useContext(Web3Context)
}