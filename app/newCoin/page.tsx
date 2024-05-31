"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useAccounts, useCurrentAccount, useSignAndExecuteTransactionBlock, useSuiClient, useSuiClientMutation } from "@mysten/dapp-kit";
import { getFullnodeUrl } from '@mysten/sui.js/client';
import { useToast } from "@/components/ui/use-toast";


const NewCoin = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [image, setImage] = React.useState<File | null>(null);
  const [gasCoin, setGasCoin] = useState<any>();
  const address = useAccounts()
  const tx = new TransactionBlock();
  const tx2 = new TransactionBlock();
  const tx3 = new TransactionBlock()
  const currentAccount = useCurrentAccount();
  const { mutate: signAndExecuteTransaction, isPending, isSuccess, data } = useSignAndExecuteTransactionBlock();
  const { toast } = useToast();

  const client = useSuiClient();


  useEffect(() => {
    if (currentAccount) {
      fetchSuiCoins(currentAccount.address).then((coins) => {
        setGasCoin(coins[0]); // Set the first SUI coin as the gas coin
      });
    }
  }, [currentAccount]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setValue("image", file);
    }
  };

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
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  //1. initCoin 실행후 유저의 지갑에 10개의 밈코인이 들어온다.
  //2. createPool 실행을 위해서는 유저의 지갑의 10억개의 밈코인의 개수를 체크하고, 해당 밈코인의 coinType을 args에 넣어줘야한다ㅏ.
  //3. [treasury, metadata , meme_coinType , suiToken(얼마나 살껀지, 만약에 안사고싶으면 (0.001 SUI))] // 0.1SUI ,0.1SUI  + 0.001 SUI + 가스비
  //밈토큰을 배포하기 위해서는 최소 수이가 정책상 정해진(아직 안정해서 없는) SUI (0.001 + 유저 더 사고 싶은 수이량) 이 있어야한다.
  //이 수이를 가지고 풀을 만들면 이 수이량의 일정 비율이 우리 플랫폼에 수수료로 들어간다.




  type UserCointype = {
    balance: string;
    coinObjectId: string;
    coinType: string;
    digest: string;
    previousTransaction: string;
    version: string;
  }

  interface ICreatePoolInput {
    currentAccount: any;
    treasury_id: string; //
    metadata_id: string; //
    meme_coin: UserCointype; //
    suiTokenInput: UserCointype; // 유저가 들고있는 수이잔액 >= (최소 유동성 + 플랫폼에서 가져가는 수수료) ex) 1 SUI (유동성) + 0.01(플랫폼에서 가져가는 수수료)
  }

  const estimateGas = (currentAccountAddress: string) => {
    const [coin] = tx.splitCoins(tx.gas, [tx.pure.u64(10000000)]);
     tx.transferObjects([coin], tx.pure.address(currentAccountAddress));
  }
  const splitSui20k = async (currentAccountAddress: string) => {
    const allCoinList = client.getAllCoins({ owner: currentAccountAddress })
    const userSuiCoinList =  (await allCoinList).data.filter((data) => data.coinType.includes("sui::SUI"))
    const [coin] = tx.splitCoins(tx.object(userSuiCoinList[0].coinObjectId), [tx.pure.u64(20000000)]);
     tx.transferObjects([coin], tx.pure.address(currentAccountAddress));
    console.log([coin], "split20kCoins")
    console.log(userSuiCoinList,"userSuiCoinList")
    // const [coin] = tx.splitCoins((await client.getCoins({ owner: currentAccountAddress })).data.filter((data)=>data.coinType.includes("sui::SUI")), [tx.pure.u64(BigInt(userSuiCoinList[0].balance) - BigInt(20000000)), tx.pure.u64(20000000)]);
    // tx.transferObjects([coin], tx.pure.address(currentAccountAddress));
  }

  async function fetchSuiCoins(ownerAddress:string) {
    const allCoins = await client.getAllCoins({ owner: ownerAddress });
    return allCoins.data.filter((coin) => coin.coinType.includes("sui::SUI"));
  }
  async function splitSuiCoins(ownerAddress:string) {
    const suiCoins = await fetchSuiCoins(ownerAddress);

    if (suiCoins.length === 0) {
      throw new Error("No SUI coins found for this address.");
    }

    const tx = new TransactionBlock();
    const primaryCoin = suiCoins[0];

    // Split the primary coin, e.g., into 2,000,000 Mist (or 2 SUI)
    const amountToSplit = 2000000; // Mist
    tx.splitCoins(primaryCoin.coinObjectId, [tx.pure.u64(amountToSplit)]);

    return tx;
  }

  async function executeSplitTransaction() {
    if (!currentAccount) {
      throw new Error("No current account available.");
    }

    if (!gasCoin) {
      throw new Error("No valid gas coins found for the transaction.");
    }

    try {
      const tx = await splitSuiCoins(currentAccount.address);

      tx.setGasBudget(1000000); // Set the gas budget
      tx.setGasPayment(gasCoin.coinObjectId); // Set the gas coin

      signAndExecuteTransaction(
        {
          transactionBlock: tx,
          account: currentAccount,
          chain: "sui:testnet",
          requestType: "WaitForLocalExecution"
        },
        {
          onSuccess: (result) => {
            toast({
              title: "Transaction Successful",
              description: `Transaction ID: ${result.digest}`,
            });
          },
          onError: (error) => {
            toast({
              title: "Transaction Failed",
              description: error.message,
            });
            console.error('Transaction failed:', error);
          },
        }
      );
    } catch (error:any) {
      toast({
        title: "Error",
        description: error,
      });
      console.error('Error executing split transaction:', error);
    }
  }

  const useFilterUserCoin = async (currentAccountAddress: string) => {
    const allCoinList = await client.getAllCoins({ owner: currentAccountAddress })
    const userMemeCoinList = allCoinList.data.filter((data) => data.coinType.includes("meme_coin::MEME_COIN") && data.balance === "100000000000000000")
    const userSuiCoinList = allCoinList.data.filter((data) => data.coinType.includes("sui::SUI"))
    // tx.mergeCoins(userSuiCoinList[0].coinObjectId, useObjectList);
    // const [coin] = tx.splitCoins(userSuiCoinList[0].coinObjectId, [(BigInt(userSuiCoinList[0].balance) - BigInt(20000000)).toString(), '20000000']);
    // estimateGas(currentAccountAddress);
    splitSui20k(currentAccountAddress);

    const allCoinList2 = await client.getAllCoins({ owner: currentAccountAddress })
    const splitedSuiCoinList = allCoinList2.data.filter((data) => data.coinType.includes("sui::SUI") && data.balance === "20000000")
    console.log(allCoinList2, "allCoinList2")
    console.log(splitedSuiCoinList, "userSuiCoinListTx")
    const filteredCoin: {
      userMemeCoin: UserCointype;
      userSuiCoin: UserCointype;
    } = { userMemeCoin: userMemeCoinList[0], userSuiCoin: splitedSuiCoinList[0] }

    return filteredCoin
  }
 
  const handleCreateCoinPool = async ({ currentAccount, treasury_id, metadata_id, meme_coin, suiTokenInput }: ICreatePoolInput) => {
   console.log("args" ,meme_coin, suiTokenInput,(process.env.NEXT_PUBLIC_AMM_CONFIG_ID as string),treasury_id, metadata_id,  )
  //  estimateGas(currentAccount.address);
   
    tx3.moveCall({
      target: `${process.env.NEXT_PUBLIC_AMM_PACKAGE_ID}::amm_swap::create_pool`,
      arguments: [
        tx3.object(treasury_id),
        tx3.object(metadata_id),
        tx3.object(process.env.NEXT_PUBLIC_AMM_CONFIG_ID as string),
        tx3.object(meme_coin.coinObjectId),
        tx3.object(suiTokenInput.coinObjectId),
      ],
      typeArguments: [
        (meme_coin.coinType),
      ],
    })

   signAndExecuteTransaction(
      {
        transactionBlock: tx3,
        account: currentAccount,
        chain: "sui:testnet",
        requestType: "WaitForLocalExecution"
      },
      {
        onSuccess: (result) => {
          console.log('executed transaction', result);
          console.log(result.digest, "digest");
        },
        onError: (error) => {
          console.log('createPoolError', error);
        },
      }
    )
    // console.log(txSign, "txSign")


  }

  const handleClick = async () => {
    if (!currentAccount) return;
    const allCoinList = await client.getAllCoins({ owner: currentAccount.address })
    const userSuiCoinList = allCoinList.data.filter((data) => data.coinType.includes("sui::SUI"))
    tx.splitCoins(userSuiCoinList[0].coinObjectId, [tx2.pure(20000000), tx2.pure(20000000)])
    // useFilterUserCoin(currentAccount.address)
    await createCoin().then(async (data) => {
      if (data) {
        console.log(data, "data")
        tx.moveCall({
          target: `${data.package_id}::meme_coin::init_coin`,
          arguments: [
            tx.object(data.treasury_id),
            tx.object(data.metadata_id),
            tx.pure.string("pepe"),
            tx.pure.string("pepe"),
            tx.pure.string("pepe"),
            tx.pure.string("pepe"),
          ],
          typeArguments: [],

        });
        // tx.build({ client });

        console.log(tx.blockData, "tx")
        tx.setGasBudget(8000000);
        const txSign = signAndExecuteTransaction(
          {
            transactionBlock: tx,
            account: currentAccount,
            chain: "sui:testnet",
            requestType: "WaitForLocalExecution"
          },
          {
            onSuccess: async (result) => {
              const allCoinList = await client.getAllCoins({ owner: currentAccount.address })
              const userMemeCoinList = allCoinList.data.filter((data) => data.coinType.includes("meme_coin::MEME_COIN") && data.balance === "100000000000000000")
              const userSuiCoinList = allCoinList.data.filter((data) => data.coinType.includes("sui::SUI"))
              tx2.splitCoins(userSuiCoinList[0].coinObjectId, [tx2.pure(20000000), tx2.pure(20000000)])
              tx2.setGasBudget(8000000);

            //   signAndExecuteTransaction(
            //    {
            //      transactionBlock: tx2,
            //      account: currentAccount,
            //      chain: "sui:testnet",
            //      requestType: "WaitForLocalExecution"
            //    },
            //    {
            //      onSuccess: (result) => {
            //        console.log('executed transaction', result);
            //        console.log(result.digest, "digest");
            //      },
            //      onError: (error) => {
            //        console.log('createPoolError', error);
            //      },
            //    } 
            //  )
            //  handleCreateCoinPool({ currentAccount: currentAccount, treasury_id: data.treasury_id, metadata_id: data.metadata_id, meme_coin: userMemeCoinList[0], suiTokenInput: userSuiCoinList[0] })
            
            },
            onError: (error) => {
              console.log('error', error);
            },
          }
        )
        console.log(txSign, "txSign")

      }

    })


    console.log(isPending, "isPending")
    console.log(isSuccess, "isSuccess")
  }

  return (
    <div className="flex-col max-w-[1608px] w-full mx-auto min-h-screen flex mt-20 items-center">
      <div className="flex justify-start w-full max-w-[386px] mb-[9px]">
        <Button
          onClick={executeSplitTransaction}
          className="w-[112px] rounded-[8px] bg-indigo-500">Back</Button>
      </div>
      <form className="w-[386px] flex-col justify-start items-start gap-3.5 inline-flex">
        <div className="h-[75px] flex-col justify-start items-start gap-[7px] flex">
          <label className="text-indigo-200 text-sm font-bold leading-normal">Name</label>
          <Input
            type="text"
            {...register("name")}
            className="w-full pl-2.5 py-2.5 rounded-[8px] border-2 border-slate-500 text-slate-500 text-sm font-normal leading-normal"
          />
        </div>
        <div className="w-full h-[123px] flex-col justify-start items-start gap-[7px] flex">
          <label className="text-indigo-200 text-sm font-medium  leading-tight">Description</label>
          <Textarea
            {...register("description")}
            className="w-full h-24 pl-2.5 py-2.5 rounded-[8px] border-2 border-slate-500 text-slate-500 text-sm font-medium  leading-tight"
          />
        </div>
        <div className="w-full h-[66px] flex-col justify-start items-start gap-[7px] flex">
          <label className="text-indigo-200 text-sm font-medium  leading-tight">Image</label>
          <div className="w-full pl-2.5 pr-[167px] py-2 rounded-[8px] border-2 border-slate-500 flex items-center gap-[9px]">
            <label className="w-[89px] px-2.5 py-2 bg-indigo-950 rounded-2xl text-center text-slate-500 text-sm font-medium  leading-tight cursor-pointer">
              <Input
                type="file"
                onChange={handleImageChange}
                className="hidden"
              />
              INSERT
            </label>
            <div className="text-slate-500 text-sm font-medium  leading-tight">
              {image ? image.name : "No images..."}
            </div>
          </div>
        </div>
        <div className="flex gap-1 text-indigo-200 text-sm font-medium  leading-tight">
        </div>
        <button
          onClick={createCoin}
          className="w-full h-[37px] px-4 py-2 bg-indigo-500 rounded-[8px] flex justify-center items-center gap-2.5 cursor-pointer">
          Create coin
        </button>
        <div className="text-indigo-200 text-sm font-medium  leading-tight">Cost to deploy: ~0.02 SUI</div>
      </form>
    </div>
  );
};

export default NewCoin;
