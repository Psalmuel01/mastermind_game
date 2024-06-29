import { createContext, useContext } from "react";
import { useActiveAccount, useReadContract, useWriteContract } from "@thirdweb-dev/react";
import { contractABI } from "../utils/abi";
import { contractAddress, CONTRACT } from "../utils/abi";
import { parseEther } from "viem";
import { prepareContractCall, sendTransaction } from "thirdweb";
// import toast from "react-hot-toast";

const ContractContext = createContext({
    activeAccount,
    _startGame() {},
    _makeGuess() {},
    _setCodeMakerAddress() {},
    _setCodeBreakerAddress() {},

});

const ContractProvider = ({ children }) => {
    const activeAccount = useActiveAccount();

    const _startGame = async ({ code1, code2, code3, code4 }) => {
        try {
            toast.loading("Executing...", { duration: 5000 });
            const tx = prepareContractCall({
                contract: CONTRACT,
                method: "startGame",
                params: [code1, code2, code3, code4],
            });
            const { transactionHash } = await sendTransaction({
                transaction: tx,
                account: activeAccount,
            })
            console.log({ transactionHash });
            toast.success("Transaction successful!");
        } catch (error) {
            toast.error("Transaction failed!");
            console.log({ error });
            console.error(error);
        }
    };

    const _makeGuess = async ({ code1, code2, code3, code4 }) => {
        try {
            toast.loading("Executing...", { duration: 5000 });
            const tx = prepareContractCall({
                contract: CONTRACT,
                method: "makeGuess",
                params: [code1, code2, code3, code4],
            });
            const { transactionHash } = await sendTransaction({
                transaction: tx,
                account: activeAccount,
            })
            console.log({ transactionHash });
            toast.success("Transaction successful!");
        } catch (error) {
            toast.error("Transaction failed!");
            console.log({ error });
            console.error(error);
        }
    };

    const _setCodeMakerAddress = async () => {
        try {
            toast.loading("Executing...", { duration: 5000 });
            const tx = prepareContractCall({
                contract: CONTRACT,
                method: "setCodemaker",
            });
            const { transactionHash } = await sendTransaction({
                transaction: tx,
                account: activeAccount,
            })
            console.log({ transactionHash });
            toast.success("Transaction successful!");
        } catch (error) {
            toast.error("Transaction failed!");
            console.log({ error });
            console.error(error);
        }
    };

    const _setCodeBreakerAddress = async () => {
        try {
            toast.loading("Executing...", { duration: 5000 });
            const tx = prepareContractCall({
                contract: CONTRACT,
                method: "setCodebreaker",
            });
            const { transactionHash } = await sendTransaction({
                transaction: tx,
                account: activeAccount,
            })
            console.log({ transactionHash });
            toast.success("Transaction successful!");
        } catch (error) {
            toast.error("Transaction failed!");
            console.log({ error });
            console.error(error);
        }
    };

    // const reportError = (error) => {
    //     console.log(error.message);
    //     throw new Error("Error", error);
    //   };

    return (
        <ContractContext.Provider
            value={{
                activeAccount,
                _startGame,
                _makeGuess,
                _setCodeMakerAddress,
                _setCodeBreakerAddress
                
            }}
        >
            {children}
        </ContractContext.Provider>
    );
};

const useContractContext = () => useContext(ContractContext);

export { ContractProvider, useContractContext };