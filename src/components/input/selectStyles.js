// selectStyles.js

export const commonStyles = {
  container: "w-full",
  control: {
    base: "!bg-white hover:cursor-pointer !rounded-xl w-full !border !border-[#ededed] h-[45px]",
    focus: "!border-[#5b2ebc] !ring-2 !ring-[#5b2ebc30]",
    nonFocus: "border-[#ededed] hover:border-gray-400",
  },
  placeholder: " pl-1 py-0.5 sm:text-sm",
  selectInput: "py-0.5",
  valueContainer: "p-1 gap-1",
  singleValue: "leading-7 ml-1",
  multiValue: "bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5",
  multiValueLabel: "leading-6 py-0.5",
  multiValueRemove:
    "border border-gray-200 text-base hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md",
  indicatorsContainer: "p-1 gap-1",
  clearIndicator:
    "text-gray-500 !hidden p-1 rounded-md hover:bg-red-50 hover:text-red-800",
  indicatorSeparator: "!bg-transparent",
  dropdownIndicator:
    "p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black",
  menu: "p-1 mt-2 border border-gray-200 !rounded-xl",
  groupHeading: "ml-3 mt-2 mb-1 text-gray-500 text-sm",
  option: {
    base: "hover:cursor-pointer px-3 py-2 !rounded-lg ",
    focus: "!bg-[#5b2ebc30] active:bg-gray-200",
    selected:
      "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
  },
  noOptionsMessage:
    "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm",
};

export default commonStyles;
