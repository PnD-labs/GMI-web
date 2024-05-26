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


enum TabEnum {
  Following = "Following",
  Terminal = "Terminal",
  Activity = "Activity",
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
    <div className="max-w-[1608px] mx-auto h-screen bg-slate-950 w-full">
      <div className="w-full mt-6">
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



      </div>
    </div>
  );
}
