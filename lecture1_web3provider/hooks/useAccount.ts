/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import useSWR from "swr";

export const useAccount = (web3: any, provider: any) => () => {
  const { mutate, ...rest } = useSWR(() => 
    web3 ? "web3/accounts": null, 
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    })

  useEffect(() => {
    provider && provider?.on("accountsChanged", (accounts: any) => mutate(accounts[0] ?? null))
  }, [provider])

  return {
    account: {
      mutate,
      ...rest
    },
  };
};
