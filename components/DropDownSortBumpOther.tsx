
import { useState } from "react";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Image from "next/image";
import { ArrowDown, ChevronDownIcon } from "lucide-react";

const DropDownSortBumpOther = () => {

  enum SORT_MENU {
    BUMP_OTHER = "sort : bump other",
    LAST_REPLY = "sort : last reply",
    REPLY_COUNT = "sort : reply count",
    MARKET_CAP = "sort : market cap",
    CREATION_TIME = "sort : creation time",
  }

  const [currentSort, setCurrentSort] = useState(SORT_MENU.BUMP_OTHER);

  const handleCheckChange = (menuKey: SORT_MENU) => {
    setCurrentSort(menuKey);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-transparent  w-[177px] h-10 px-3 py-2 bg-slate-800 rounded-[8px] justify-between items-center inline-flex text-indigo-200 text-sm font-normal hover:bg-slate-600">
        {currentSort}
        <ChevronDownIcon size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-transparent rounded-[8px] mt-1 flex-col text-indigo-200 text-sm font-normal w-[177px] bg-slate-800">
        {Object.entries(SORT_MENU).map(([key, value]) => (
          <DropdownMenuCheckboxItem
            key={value}
            checked={currentSort === value}
            onCheckedChange={() => handleCheckChange(value)}
            className=" bg-slate-800 rounded-lg hover:bg-slate-600 cursor-pointer"
          >
            {value}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownSortBumpOther;
