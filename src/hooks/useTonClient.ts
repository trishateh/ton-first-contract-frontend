import { getHttpEndpoint } from "@orbs-network/ton-access";
import { TonClient } from "@ton/ton";
import { useAsyncInitialize } from "./useAsyncInitialize";
// initialize an RPC client in our app
export function useTonClient() {
    return useAsyncInitialize(
        async () => new TonClient({
            endpoint: await getHttpEndpoint({ network: "testnet"})
        })
    )
}