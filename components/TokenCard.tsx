import { useRouter } from "next/navigation";



export interface ITokenCard {
  name: string;
  creator: string;
  marketCap: string;
  replies: number;
  ticker: string;
  badge: boolean;
}


const TokenCard = () => {

  const router = useRouter();

  const handleClick = () => {
    router.push("/detail");
  };

  return (
    <div onClick={() => handleClick()} className="hover:bg-indigo-900 cursor-pointer w-full min-h-[131px]  px-3 md:pr-8 py-[22px] bg-slate-950 rounded-2xl border-2 border-indigo-500 justify-start items-center gap-3 inline-flex">
      <div className="min-w-[127px] h-[127px] rounded-2xl border border-indigo-500" />
      <div className="flex-col justify-start items-center gap-2.5 inline-flex pl-4">
        <div className="w-[181px] h-8 px-2  bg-indigo-500 rounded-xl shadow justify-center items-center flex">
          <div className="text-white text-sm font-bold ">DogWifBlueHatSol </div>
        </div>
        <div className="flex-col justify-start items-start flex gap-2.5 ">
          <div className="justify-center items-center gap-[3px] inline-flex">
            <div className="text-white text-sm font-bold ">Created by</div>
            <div className="w-[18px] h-[18px] rounded bg-white" />
            <div className="text-white text-sm font-bold ">dogwifblue</div>
          </div>
          <div className="flex gap-1">
            <div className=" text-cyan-500 text-xs font-bold ">market cap: 25.46K</div>
            <div className="text-emerald-600 text-xs font-bold ">[badge:]</div>
          </div>
          <div className="text-slate-500 text-xs font-normal">replies : 70</div>
          <div className="text-slate-500 text-xs font-bold ">(ticker: dogwifblue)</div>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
