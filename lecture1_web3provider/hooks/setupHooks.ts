/* eslint-disable react-hooks/rules-of-hooks */
import { useAccount } from "./useAccount";
import { useNetwork } from "./useNetwork";


const DEFAULT_HOOKS = {
  useAccount: () => ({ account: null }),
  useNetwork: () => ({ network: null }),
};

export const setupHooks = (web3: any, provider: any) => {
  if (!web3) {
    return DEFAULT_HOOKS;
  }
  return {
    useAccount: useAccount(web3, provider),
    useNetwork: useNetwork(web3, provider),
  };
};
