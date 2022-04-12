/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import useSWR from "swr";

const SUPPORT_NETWORK = 56

const NETWORKS = {
  1: "Ethereum Main NetWork",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Kvan Test Network",
  56: "Binance Smart Chain",
  1337: "Ganache",
};

const targetNetwork = NETWORKS[SUPPORT_NETWORK];

export const useNetwork = (web3: any, provider: any) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/network" : null),
    async () => {
      const netId = web3.eth.net.getId();
      return netId;
    }
  );

  useEffect(() => {
    provider && provider.on("chainChanged", (netId: any) => mutate(netId));
  }, [provider]);

  useEffect(() => {
    if(data !== SUPPORT_NETWORK) {
      try {
        provider.request({
          method: "wallet_switchEthereumChain",
          params: [{
            chainId: "0x38",
          }]
        })

      } catch (err: any) {
        
        console.log("wrong")
      }
    }
  }, [data])
  return {
    network: {
      data,
      isSuported: data === SUPPORT_NETWORK,
      mutate,
      ...rest,
    },
  };
};
