import { updateDataByKey } from "@/store/actions";
import React from "react";
import CreatableSelect from "react-select/creatable";

import { useDispatch, useSelector } from "react-redux";

const components = {
  DropdownIndicator: null,
};

const createOption = (label) => ({
  label,
  value: label,
});

export default function Skills() {
  const [inputValue, setInputValue] = React.useState("");
  const [value, setValue] = React.useState([]);

  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.common);

  console.log(storeData, "storedata");

  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue((prev) => [...prev, createOption(inputValue)]);
        setInputValue("");
        event.preventDefault();
    }
  };

  function handleClick() {
    dispatch(
      updateDataByKey("resumeData", {
        ...storeData.resumeData,
        skills: value,
      })
    );
    console.log(value, "submitted values");
  }

  return (
    <div>
      <div>
        <div className="py-4 px-8 border-b border-gray-200">
          <h1 className="font-bold text-2xl">Skills</h1>
        </div>
        <div>
          <div className="py-2 px-8">
            <div className="mb-1">
              <label htmlFor="skills">Skills *</label>
            </div>
            <div>
              {/* <input
                id="skills"
                type="text"
                className="px-2 border border-gray-200 rounded-lg w-full h-[40px]"
                placeholder=""
              /> */}
              <CreatableSelect
                components={components}
                inputValue={inputValue}
                isClearable
                isMulti
                menuIsOpen={false}
                onChange={(newValue) => setValue(newValue)}
                onInputChange={(newValue) => setInputValue(newValue)}
                onKeyDown={handleKeyDown}
                placeholder="Type your Skills"
                value={value}
                className="px-2  rounded-lg w-full h-[40px]"
              />
            </div>
          </div>
        </div>
        <div className="p-4 flex justify-end border-t border-gray-200 absolute bottom-0 right-0 left-0">
          <button
            onClick={handleClick}
            className="px-6 py-2 text-lg rounded-lg  bg-black border text-white"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}
