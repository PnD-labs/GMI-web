import { SetStateAction, useState } from "react";



enum TabEnum {
  Thread = "Thread",
  Trades = "Trades",
}

interface TabsProps {
  setCurrentTab: any;
}
const DetailTabs = ({ setCurrentTab}: TabsProps) => {
  const [tabState, setTabState] = useState<string>(TabEnum.Trades);

  const handleTabChange = (tab: string) => {
    setTabState(tab);
    setCurrentTab(tab)
  };

  return (
    <div className="flex w-20 text-slate-500 text-2xl font-semibold gap-4 py-6">
      {Object.values(TabEnum).map((tab) => (
        <div
          key={tab}
          className={`relative cursor-pointer flex items-center justify-center w-[85px] text-lg font-extrabold transition-all duration-300 ${tabState === tab ? "text-indigo-500" : "text-slate-500 hover:text-indigo-500"
            }`}
          onClick={() => handleTabChange(tab)}
        >
          {tab}
          <span
            className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transition-all duration-500 transform ${tabState === tab ? "scale-x-100" : "scale-x-0"
              }`}
            style={{ transformOrigin: "center" }}
          ></span>
        </div>
      ))}
    </div>
  );
};

export default DetailTabs;
