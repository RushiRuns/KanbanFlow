import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@radix-ui/react-dropdown-menu";

import { IoIosArrowDown } from "react-icons/io";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { IoCheckmark } from "react-icons/io5";

const PriorityListArray = [
  {
    name: "Low",
    icon: RiArrowDownDoubleFill,
    textColor: "text-white",
    backgroundColor: "bg-green-500/10",
  },
  {
    name: "Medium",
    icon: MdKeyboardDoubleArrowRight,
    textColor: "text-white",
    backgroundColor: "bg-yellow-500/10",
  },
  {
    name: "High",
    icon: MdOutlineKeyboardDoubleArrowUp,
    textColor: "text-white",
    backgroundColor: "bg-red-500/10",
  },
];

export default function PriorityList({ selectedPriority, onPriorityChange }) {
  function renderSelectedPriority() {
    return (
      <div className="flex items-center gap-2 ">
        <div
          className={`size-6 ${selectedPriority.backgroundColor} rounded-md flex items-center justify-center text-lg font-bold ${selectedPriority.textColor}`}
        >
          {<selectedPriority.icon />}
        </div>
        <span className={`${selectedPriority.textColor} `}>
          {selectedPriority.name}
        </span>
      </div>
    );
  }

  function renderDropDownMenuItem(priorityItem) {
    return (
      <div className="flex items-center gap-2 ">
        <div
          className={`size-6 ${priorityItem.backgroundColor}  rounded-md flex items-center  justify-center text-lg ${priorityItem.textColor}`}
        >
          {<priorityItem.icon />}
        </div>
        <span className={`${priorityItem.textColor} group-focus:text-black`}>{priorityItem.name}</span>
      </div>
    );
  }

  function isDropDownItemChecked(priorityItem) {
    return (
      <>{priorityItem.name === selectedPriority.name && <IoCheckmark />}</>
    );
  }

  return (
    <div className="">
      <Label className=" text-sm font-medium">Priority</Label>
      <div className="mt-2 w-full ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              id="priority-dropdown"
              variant={"outline"}
              className="w-full h-11 flex justify-between bg-gray text-white "
            >
              {renderSelectedPriority()}
              <IoIosArrowDown className="text-gray-600" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-full min-w-[var(--radix-dropdown-menu-trigger-width)] poppins bg-[#2f2f2f] text-white "
          >
            {PriorityListArray.map((priorityItem, index) => (
              <DropdownMenuItem
                className="group flex justify-between items-center "
                onClick={() => onPriorityChange(priorityItem)}
                key={index}
              >
                {renderDropDownMenuItem(priorityItem)}
                {isDropDownItemChecked(priorityItem)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
