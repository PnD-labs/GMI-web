'use client'

import { useRef, useState } from "react"
import TradesTableView from "../TradesTableView"
import PaginationCoinDetail from "../pagenation/PaginationCoinDetail"
import DetailTabs from "../tab/DetailTabs"
import { Card, CardContent } from "../ui/card"
import TradingViewWidget from "../TradingViewWidget"


const DetailTradingView = (setCurrentTab: any) => {
  const [timeframe, setTimeframe] = useState('1d');
  const chartRef = useRef<HTMLDivElement>(null);

  
  return (
    <div className="flex-col">
      <Card className="w-full max-w-[1064px] rounded-2xl border-none shadow">
        <TradingViewWidget />
      </Card>
      <div>
        <div className="flex w-full max-w-[1064px]">
          <DetailTabs setCurrentTab={setCurrentTab} />
          <PaginationCoinDetail />
        </div>
        <TradesTableView />
      </div>
    </div>
  )

}

export default DetailTradingView
