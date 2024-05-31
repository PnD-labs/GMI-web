'use client'

import { useRef, useState } from "react"
import TradesTableView from "../TradesTableView"
import PaginationCoinDetail from "../pagenation/PaginationCoinDetail"
import DetailTabs from "../tab/DetailTabs"
import { Card, CardContent } from "../ui/card"
import TradingViewWidget from "../TradingViewWidget"
enum CoinTabEnum {
  Thread = "Thread",
  Trades = "Trades",
}

const DetailTradingView = () => {
  const [timeframe, setTimeframe] = useState('1d');
  const chartRef = useRef<HTMLDivElement>(null);
  const [currentTab, setCurrentTab] = useState(CoinTabEnum.Trades)

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
        {currentTab === CoinTabEnum.Trades && <TradesTableView />}
      </div>
    </div>
  )

}

export default DetailTradingView
