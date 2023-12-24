import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";

const PopoverButton = ({
  name,
  handleMouseEnter,
  handleMouseLeave,
}: {
  name: string;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}) => {
  return (
    <Popover.Button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id={name}
      className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
    >
      {name ?? "Please Provide a Name in Props"}
      <ChevronDownIcon
        className="h-5 w-5 flex-none text-gray-400"
        aria-hidden="true"
      />
    </Popover.Button>
  );
};

export default PopoverButton;
