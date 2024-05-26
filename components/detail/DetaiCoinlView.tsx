'use client'

import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import DetailInfo from "./DetailInfo"
import DetailTradingView from "./DetailTradingView"
import TradesTableView from "../TradesTableView"
import { useState } from "react"
import MainTabs from "../tab/MainTabs"
import DetailTabs from "../tab/DetailTabs"
import PaginationCoinDetail from "../pagenation/PaginationCoinDetail"
import TokenHolderDistributionCard from "../token-holder/TokenHolderDistribution"
import { Card } from "../ui/card"
import TradingBox from "./TradingBox"

enum CoinTabEnum {
  Thread = "Thread",
  Trades = "Trades",
}

const DetailCoinView = () => {


  const router = useRouter()
  const [currentTab, setCurrentTab] = useState(CoinTabEnum.Trades);

  return (
    <div className="max-w-[1608px] w-full mx-auto h-screen flex-col items-center justify-center mt-[66px]">
      <div className="w-full flex justify-start">
        <Button onClick={() => router.push('/')} className="w-[110px] h-10 px-4 py-2 rounded-[8px] bg-indigo-500 text-white text-base font-bold hover:bg-indigo-400">Back</Button>
      </div>
      <div className="flex justify-between">
        <div className="flex-col">
          <div className="flex gap-4 mt-[39px]">
            <div className="w-[113px] h-[113px] rounded-2xl border-2 border-indigo-500">
            </div>
            <div className="flex-col gap-[19px] py-[3.5px]">
              <div className="flex gap-[14px]">
                <div className="flex items-center text-indigo-500 text-2xl font-semibold">
                  gorcia
                </div>
                <div className=" flex-row gap-3 h-[39px] px-2.5 py-[9px] bg-indigo-500 rounded-full justify-start items-center  inline-flex">
                  <div className="text-white text-lg font-extrabold ">created by</div>
                  <div className="w-[18px] h-[18px] rounded bg-white" />
                  <div className="text-white text-lg font-extrabold ">howgay</div>
                </div>
              </div>

              <div className="pt-[19px] text-5xl text-white font-extrabold">Ryen Gorcia</div>
            </div>
          </div>
          <div className="max-w-[827px] w-full text-white text-3xl font-semibold pt-[79px]">
            Te foorth best lytwayt booxer. 🏆 CTE survivoor. FuK Devun Hanee Fight dis saterdai
          </div>
        </div>
        <div>
        </div>
      </div>
      <DetailInfo />
      <div className="flex gap-6 mt-[23px]">
        <div className="flex-[1064]">
          <DetailTradingView setCurrentTab={setCurrentTab} />
        </div>
        <div className="flex-col flex-[520]">
          <Card className="w-[520px] h-[473px] bg-slate-800  rounded-2xl border-none shadow">
            <TradingBox />
          </Card>
          <TokenHolderDistributionCard />
        </div>
      </div>





    </div>
  )
}

export default DetailCoinView
