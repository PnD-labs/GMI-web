"use client"
import { useCurrentAccount } from "@mysten/dapp-kit";
import Image from "next/image"
import React, { useState } from "react"
import coinImg from "../../assets/icons/coinImg.png";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { MessageSquare } from "lucide-react";
import ProfileTabs from "@/components/tab/ProfileTabs";
import TokenCardProfile from "@/components/TokenCardProfile";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
const UserProfile = () => {

  const currentAccount = useCurrentAccount();

  const account = currentAccount?.address;

  const userTableList = [
    "Coins held", " Coins created", "Followers", "Following"
  ]
  enum TabEnum {
    CoinHeld = "Coins held",
    CoinCreated = "Coins created",
    Followers = "Followers",
    Following = "Following"
  }

  const [currentTab, setCurrentTab] = useState(TabEnum.CoinHeld);
  const [tabState, setTabState] = React.useState("Coins held")

  const handleTabChange = (tabState: string) => {
    const newTabState = tabState
    setTabState(newTabState)
  }

  interface IUserProfile {
    name: string;
    image: string;
    followers: number;
    like: number;
    replies: number;
  }

  const mockData: IUserProfile = {
    name: "@0x1234",
    image: "",
    followers: 0,
    like: 0,
    replies: 0
  }

  return (
    <div className="flex-col max-w-[1608px] w-full mx-auto min-h-screen flex mt-20 items-center">
      <div >
        <div className="flex">
          <Image src={coinImg} alt={"123"} className="w-[70px] h-[70px] rounded-full" />
          <div className="flex w-full justify-between pl-1">
            <div className="flex-col ">
              <div className="flex-col ">
                <div className="text-indigo-500 text-base font-bold ">
                  {mockData.name}
                </div>
                <div className="pt-[10px] pb-1 text-white text-sm font-bold">{mockData.followers} Followers</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex items-center text-red-400 text-sm font-bold gap">Like received {mockData.like}
                  <HeartFilledIcon />
                  {/* <Image src={like} alt="like" /> */}
                </div>

                <span className="flex items-center text-[#00E2C7] text-sm font-bold gap-[0.5px]">Mentions received {mockData.replies}
                  {/* <Image src={like} alt="like" /> */}
                  <MessageSquare size={18} />
                </span>
              </div>
            </div>
            <button className=" text-white text-sm font-bold  flex w-[76px] h-8 px-2 py-[3px] bg-indigo-500 rounded-xl justify-center items-center gap-[3px]"
            >Follow</button>
          </div>
        </div>
        <div className="mt-2">
        <TooltipProvider>
      <Tooltip>
    
    <TooltipTrigger>
      <div className="w-full h-10 p-2 bg-slate-800 rounded-xl border-2 border-indigo-500 justify-center items-center gap-2.5 inline-flex">
        <div className="w-full text-white text-sm font-bold font-['Pretendard'] leading-normal">{account && account.slice(0, 48) + "..."}</div>
       </div>
    </TooltipTrigger>
    <TooltipContent>
      <p>{account && account}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
          
          <div className="flex justify-end mt-1">
            <div className="text-white text-sm font-bold">
              View on Suiscan
            </div>
          </div>
        </div>

        {/* CoinHeld , Coins created , Followes , Following */}
        <ProfileTabs setCurrentTab={setCurrentTab} />
        {currentTab === TabEnum.CoinHeld && [0, 0, 0, 0, 0].map((value, index) => {
          return (
            <div key={index} className="my-3 ">
              <div className="w-[456px] h-[60px] p-[5px] cursor-pointer hover:bg-slate-500 bg-slate-800 rounded-xl justify-start items-start gap-3 inline-flex">
                <Image src={coinImg} alt={"123"} className="w-[50px] h-[50px] rounded-full" />
                <div className="flex-col justify-start items-start gap-px inline-flex">
                  <div className="justify-start items-start gap-[5px] inline-flex">
                    <div className="text-white text-sm font-bold  leading-normal">2</div>
                    <div className="text-white text-sm font-bold  leading-normal">FoXERS</div>
                  </div>
                  <div className="justify-start items-start gap-[3px] inline-flex">
                    <div className="text-indigo-400 text-sm font-bold  leading-normal">0.00</div>
                    <div className="text-indigo-400 text-sm font-bold  leading-normal">SUI</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        {currentTab === TabEnum.CoinCreated && [0, 0].map(() => {
          return (
            <div className="max-w-[456px] my-3">
              <TokenCardProfile />
            </div>
          )
        })}
      </div>
    </div>

  )
}


export default UserProfile
