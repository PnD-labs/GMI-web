"use client";

import { Box } from "@radix-ui/themes";
import { useCurrentAccount, useSuiClient } from '@mysten/dapp-kit';;
import TokenList from "@/components/TokenList";
import DropDownSortBumpDesc from "@/components/DropDownSortDesc";
import AnimationOnOff from "@/components/swich/Animations";
import Top3CoinSection from "@/components/Top3Coinbox";
import DropDownSortBumpOther from "@/components/DropDownSortBumpOther";
import { useEffect, useState } from "react";
import { CoinBalance } from "@mysten/sui.js/client";
import { useRouter } from "next/navigation";
import MainTabs from "@/components/tab/MainTabs";
import PaginationTokenList from "@/components/pagenation/PaginationTokenList";
import { ActivityTable } from "@/components/table/ActivityTable";


enum TabEnum {
  Following = "Following",
  Terminal = "Terminal",
  Activity = "Activity",
}
type TradeType = "buy" | "sell"
interface IActivityTable{
  id: number;
  accountAddress: string;
  type: TradeType;
  ticker: string;
  liquidity: string;
  amount: string
  date: string;
  transactionHash: string;
}
const mockData: IActivityTable[] = [
  {
      id: 1,
      accountAddress: "0xAbc1234567890abcdef1234567890abcdef1234",
      type: "buy",
      ticker: "ETH",
      liquidity: "1000",
      amount: "0.5",
      date: "2024-05-29T12:34:56Z",
      transactionHash: "0x123abc456def7890abcdef1234567890abcdef1234567890abcdef1234567890"
  },
  {
      id: 2,
      accountAddress: "0xDef4567890abcdef1234567890abcdef12345678",
      type: "buy",
      ticker: "BTC",
      liquidity: "2000",
      amount: "0.1",
      date: "2024-05-28T11:22:33Z",
      transactionHash: "0x456def7890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
  },
  {
      id: 3,
      accountAddress: "0xGhi7890abcdef1234567890abcdef123456789012",
      type: "buy",
      ticker: "USDT",
      liquidity: "5000",
      amount: "100",
      date: "2024-05-27T10:20:30Z",
      transactionHash: "0x7890abcdef1234567890abcdef1234567890abcdef1234567890abcdef123456"
  },
  {
      id: 4,
      accountAddress: "0xJkl01234567890abcdef1234567890abcdef1234",
      type: "buy",
      ticker: "UNI",
      liquidity: "1500",
      amount: "50",
      date: "2024-05-26T09:18:27Z",
      transactionHash: "0x01234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
  },
  {
      id: 5,
      accountAddress: "0xMno34567890abcdef1234567890abcdef12345678",
      type: "buy",
      ticker: "LINK",
      liquidity: "800",
      amount: "25",
      date: "2024-05-25T08:16:24Z",
      transactionHash: "0x34567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234"
  },
  {
    id: 5,
    accountAddress: "0xMno34567890abcdef1234567890abcdef12345678",
    type: "buy",
    ticker: "LINK",
    liquidity: "800",
    amount: "25",
    date: "2024-05-25T08:16:24Z",
    transactionHash: "0x34567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234"
}
];

const mockData2 = () => {
  for(let i = 0; i < 10; i++){
    mockData.push(mockData[0])
  }
  return mockData
}


export default function Home() {
  const client = useSuiClient();
  const currentAccount = useCurrentAccount();

  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState<CoinBalance>();
  const [currentTab, setCurrentTab] = useState(TabEnum.Terminal);
  const accountAddress = currentAccount?.address

  const router = useRouter();

  useEffect(() => {

    const fetchBalance = async () => {
      if (client && accountAddress) {
        try {
          const balance = await client.getBalance({ owner: accountAddress });
          setBalance(balance);
        } catch (error) {
          console.error('Error fetching balance:', error);
        }
      }
    };

    fetchBalance();
  }, [client, accountAddress]);

  return (
    <div className="max-w-[1608px] mx-auto min-h-screen  w-full mt-6">
      <div className="w-full">
        <Top3CoinSection />
      </div>
      <div className="w-full">
        <div className="mt-4">
          <MainTabs setCurrentTab={setCurrentTab}/>
        </div>
        <Box className="flex justify-between">
          <div className="flex gap-4 pb-3">
            <DropDownSortBumpOther />
            <DropDownSortBumpDesc />

            <div className="flex items-center">
              <AnimationOnOff />
              {/* <NsfwOnOff /> */}
            </div>
          </div>

          <div className="">
            {currentTab === TabEnum.Terminal &&
              <>
                <PaginationTokenList />
              </>
            }
          </div>

        </Box>

        {currentTab === TabEnum.Terminal && <TokenList />}
        {currentTab === TabEnum.Activity && <ActivityTable data={mockData2()}/>}



      </div>
    </div>
  );
}
