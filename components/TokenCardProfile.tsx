"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import coinImg from "../assets/icons/coinImg.png";

//웹 소켓 연결
//거래가 일어나면 쿼리를 날림

export interface IPagination {
  filter: string; // 검색
  sort: string; // desc, asc , bump order
  page: number;
  limit: number;
}

export interface ITokenCardResponse {
  result: ITokenCard[];
  totalCount: number;
}
export interface ITokenCard {
  id: string;
  name: string;
  creator: string;
  marketCap: string;
  replies: number;
  symbol: string;
  creationTime: Date;
  recentTradedTime: Date;
}


const TokenCardProfile = () => {

  const router = useRouter();

  const handleClick = () => {
    router.push("/detail");
  };

  return (
    <div onClick={() => handleClick()} className="hover:bg-indigo-900 cursor-pointer w-full min-h-[131px]  px-3 md:pr-8 py-[22px] bg-slate-950 rounded-2xl border-2 border-indigo-500 justify-start items-center gap-3 inline-flex">
      <div className="w-[140px] h-[125px] rounded-[8px]  relative overflow-hidden">
        <Image src={coinImg} alt="img" className="w-[140px] h-[125px] rounded-2xl" />
      </div>
      <div className="flex-col justify-start items-center gap-2.5 inline-flex pl-4">
        <div className="w-[181px] h-8 px-2  bg-indigo-500 rounded-xl shadow justify-center items-center flex">
          <div className="text-white text-sm font-bold ">Ryen Gorcia </div>
        </div>
        <div className="flex-col justify-start items-start flex gap-2.5 ">
          <div className="justify-center items-center gap-[3px] inline-flex">
            <div className="text-white text-sm font-bold ">Created by</div>
            <div className="w-[18px] h-[18px] rounded bg-white" />
            <div className="text-white text-sm font-bold ">howgay</div>
          </div>
          <div className="flex gap-1">
            <div className=" text-cyan-500 text-xs font-bold ">market cap: 25.46K</div>
          </div>
          <div className="text-slate-500 text-xs font-normal">replies : 70</div>
          <div className="text-slate-500 text-xs font-bold ">(ticker: RGA)</div>
        </div>
      </div>
    </div>
  );
};

export default TokenCardProfile;
