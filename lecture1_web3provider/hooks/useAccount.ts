/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import useSWR from "swr";

const adminAddress: any = {
  "0x751d5DBDB4F6eaf32006e085700924F022cc05bF": true
}

export const useAccount = (web3: any, provider: any) => () => {
  const { mutate, data, ...rest } = useSWR(
    () => (web3 ? "web3/accounts" : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider?.on("accountsChanged", (accounts: any) =>
        mutate(accounts[0] ?? null)
      );
  }, [provider]);

  return {
    account: {
      data,
      isAdmin: (data && adminAddress[data]) ?? false,
      mutate,
      ...rest,
    },
  };
};
