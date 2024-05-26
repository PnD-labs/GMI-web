import { SetStateAction, useState } from "react";



enum TabEnum {
  Following = "Following",
  Terminal = "Terminal",
  Activity = "Activity",
}

interface TabsProps {
  setCurrentTab: any;
}
const MainTabs = ({ setCurrentTab}: TabsProps) => {
  const [tabState, setTabState] = useState<string>(TabEnum.Terminal);

  const handleTabChange = (tab: string) => {
    setTabState(tab);
    setCurrentTab(tab)
  };

  return (
    <div className="flex gap-[16px] pt-[16px] pb-[16px] relative">
      {Object.values(TabEnum).map((tab) => (
        <div
          key={tab}
          className={`relative cursor-pointer flex items-center justify-center w-[85px] text-lg font-extrabold transition-all duration-300 ${tabState === tab ? "text-indigo-500" : "text-indigo-200 hover:text-indigo-500"
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

export default MainTabs;
