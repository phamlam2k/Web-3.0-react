import { createContext, useContext, useEffect, useMemo, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import { setupHooks } from "@hooks/setupHooks";

const Web3Context = createContext({});

export default function Web3Provider({ children }: any) {
  const [web3Api, setWeb3Api] = useState<any>({
    provider: null,
    web3: null,
    contract: null,
    isInitialized: false,
    isLoading: true,
  });

  const connectMetamask = async () => {
    if (web3Api.provider) {
      try {
        await web3Api.provider.request({ method: "eth_requestAccounts" });
      } catch (error) {
        console.log("Cannot retrevie account");
      }
    } else {
      console.log("Cant connect");
    }
  };

  useEffect(() => {
    const loadProvider = async () => {
      const provider: any = await detectEthereumProvider();
      if (provider) {
        const web3 = new Web3(provider);

        setWeb3Api({
          provider,
          web3,
          contract: null,
          isInitialized: true,
          isLoading: false,
        });
      } else {
        setWeb3Api((api: any) => ({
          ...api,
          isInitialized: true,
          isLoading: false,
        }));
        console.error("Please install metamask");
      }
    };

    loadProvider();
  }, []);

  const _web3Api = useMemo(() => {
    return {
      ...web3Api,
			hooks: setupHooks(web3Api.web3, web3Api.provider),
      connect: connectMetamask,
    };
  }, [web3Api]);

  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}
