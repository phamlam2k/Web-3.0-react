import { useAccount } from "./useAccount"

const DEFAULT_HOOKS = {
    useAccount: () => ({ account: null})
}

export const setupHooks = (web3: any, provider) => {
    if (!web3) {
        return DEFAULT_HOOKS
    }
    return {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useAccount: useAccount(web3, provider)
    }
}