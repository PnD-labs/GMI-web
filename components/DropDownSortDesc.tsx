
import { useState } from "react";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/themes";


const DropDownSortBumpDesc = () => {

  enum SORT_MENU {
    DESC = "sort : desc",
    ASC = "sort : asc",
  }

  const [currentSort, setCurrentSort] = useState(SORT_MENU.DESC);

  const handleCheckChange = (menuKey: SORT_MENU) => {
    setCurrentSort(menuKey);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[116px] h-10 px-3 py-2 bg-slate-800 rounded-[8px] justify-between items-center inline-flex text-indigo-200 text-sm font-normal hover:bg-slate-600">
        {currentSort}
        <ChevronDownIcon scale={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-transparent mt-1 flex-col text-indigo-200 text-sm font-normal w-[116px] bg-slate-800 rounded-[8px]">
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

export default DropDownSortBumpDesc;
