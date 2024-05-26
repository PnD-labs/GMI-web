import { mockData } from "./table/TradesMockData";
import { TradesTable } from "./table/TradesTable";


const TradesTableView = () => {

  return (
    <div className="flex-col w-full max-w-[1064px] mb-11">
      <TradesTable data={mockData} />
    </div>
  )
}


export default TradesTableView;
