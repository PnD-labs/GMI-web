"use client";

import React, { useState, useEffect } from "react";
import { useSuiClient, useSignAndExecuteTransactionBlock, useCurrentAccount } from "@mysten/dapp-kit";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const SplitSuiCoin = () => {
  const client = useSuiClient();
  const currentAccount = useCurrentAccount();
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransactionBlock();
  const { toast } = useToast();

  const [gasCoin, setGasCoin] = useState<any>();
  const [error, setError] = useState<any>();


  interface ICreateCoinResponse {
    metadata_id: string;
    treasury_id: string;
    package_id: string;
  }

  async function createCoin() {
    const url = 'http://15.235.164.2:8000/create_coin';
    const data = { address: currentAccount?.address };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      const result: ICreateCoinResponse = await response.json();
      toast({
        title: "Ready to create coin",
        description: `metadata_id: ${result.metadata_id} treasury_id: ${result.treasury_id} package_id: ${result.package_id}`,
      })
      return result
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    if (currentAccount) {
      fetchSuiCoins(currentAccount.address).then((coins) => {
        setGasCoin(coins[0]); // Set the first SUI coin as the gas coin
      }).catch((error) => {
        setError(error.message);
      });
    }
  }, [currentAccount]);

  async function fetchSuiCoins(ownerAddress:string) {
    const allCoins = await client.getAllCoins({ owner: ownerAddress });
    return allCoins.data.filter((coin) => coin.coinType.includes("sui::SUI"));
  }

  async function splitSuiCoins(ownerAddress:string) {
    const suiCoins = await fetchSuiCoins(ownerAddress);
    console.log('SUI Coins:', suiCoins);

    // if (suiCoins.length === 0) {
    //   throw new Error("No SUI coins found for this address.");
    // }

    // const txb = new TransactionBlock();
    // const primaryCoin = suiCoins[0];
    // console.log('Primary Coin:', primaryCoin);
    // // const coinToPay = await client.getObject({ id: suiCoins[0].coinObjectId });
    // const [coin] =txb.splitCoins(
    //   txb.gas,
    //   [txb.pure(2000000)]
    //  )
    //  txb.transferObjects([coin], txb.pure(ownerAddress));
    //  txb.setGasBudget(100000000);
    //  return txb;
  }

  async function executeSplitTransaction() {
    if (!currentAccount) {
      setError("No current account available.");
      return;
    }

    if (!gasCoin) {
      setError("No valid gas coins found for the transaction.");
      return;
    }

    const userMemeCoinList = allCoinList.data.filter((data) => data.coinType.includes("meme_coin::MEME_COIN") && data.balance === "100000000000000000")
    // try {
      const  tx= await splitSuiCoins(currentAccount.address);
  

      // signAndExecuteTransaction(
      //   {
      //     transactionBlock: tx,
      //     account: currentAccount,
      //     chain: "sui:testnet",
      //     requestType: "WaitForLocalExecution"
      //   },
      //   {
      //     onSuccess: (result) => {
      //       toast({
      //         title: "Transaction Successful",
      //         description: `Transaction ID: ${result.digest}`,
      //       });
      //       setError(null); // Clear any previous errors
      //     },
      //     onError: (error) => {
      //       toast({
      //         title: "Transaction Failed",
      //         description: error.message,
      //       });
      //       setError(error.message);
      //       console.error('Transaction failed:', error);
      //     },
      //   }
      // );
    // } catch (error:any) {
    //   toast({
    //     title: "Error123",
    //     description: error.message,
    //   });
    //   setError(error.message);
    //   console.error('Error executing split transaction:', error);
    // }
  }

  return (
    <div className="flex-col max-w-[1608px] w-full mx-auto min-h-screen flex mt-20 items-center">
      <Button
        onClick={executeSplitTransaction}
        className="w-[112px] rounded-[8px] bg-indigo-500">
        Split SUI Coin
      </Button>
      {error && (
        <div className="mt-4 text-red-500">
          {error}
        </div>
      )}
    </div>
  );
};

export default SplitSuiCoin;
