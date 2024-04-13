import { Icon } from "@iconify/react";
import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { clsx } from "clsx";
import commonStyles from "./selectStyles";
import { components } from "react-select";

const CreatableSelectComponent = ({
  iconName,
  label,
  dataList,
  keyName,
  setFieldValue,
  error,
  touched,
  value,
  multiple = false,
  optional = true,
  required = true,
  showSearchIcon = false,
  selectControlClass = "",
  selectContainerClass = "",
  multiValueClass = "",
  placeholder = "",
  subTitle = "",
}) => {
  const [options, setOptions] = useState(dataList);
  const [selectedValues, setSelectedValues] = useState(
    multiple ? value || [] : value ? [value] : []
  );

  const handleChange = (selectedOptions) => {
    const isMultiSelect = Array.isArray(selectedOptions);
    const newValue = isMultiSelect
      ? selectedOptions.map((option) => option.value)
      : selectedOptions
      ? [selectedOptions.value]
      : [];
    setSelectedValues(newValue);
    setFieldValue(keyName, multiple ? newValue : newValue[0] || "");
  };
  const createOption = (label) => {
    const newOption = {
      label,
      value: label,
    };
    setOptions([...options, newOption]);
    setSelectedValues([...selectedValues, label]);
    setFieldValue(keyName, [...selectedValues, label]);
  };
  const ValueContainer = ({ children, ...props }) => {
    return (
      components.ValueContainer && (
        <components.ValueContainer {...props}>
          {!!children && (
            <Icon
              icon="bitcoin-icons:search-filled"
              color="#aaa"
              width="24"
              className="absolute left-3 bg-gray-200 rounded-lg h-10 w-10 p-1"
            />
          )}
          {children}
        </components.ValueContainer>
      )
    );
  };
  return (
    <div>
      <Icon icon={iconName} color="#aaa" width="30" />
      <label className="block mb-1 text-left text-[14px] text-sm font-medium">
        {label}{" "}
        {required ? (
          <span className="text-red-400">*</span>
        ) : (
          optional && (
            <span className="text-gray-400 lowercase">{`(optional)`}</span>
          )
        )}
      </label>
      {subTitle && (
        <span className="text-gray-400  text-sm font-medium ">{subTitle}</span>
      )}
      <CreatableSelect
        options={dataList}
        name={keyName}
        value={options.filter((option) =>
          selectedValues.includes(option.value)
        )}
        onChange={handleChange}
        isMulti={multiple}
        onCreateOption={(val) => createOption(val)}
        formatCreateLabel={(userInput) => `Create new company "${userInput}"`}
        placeholder={placeholder || "Enter company name"}
        components={showSearchIcon ? { ValueContainer } : {}}
        classNames={{
          container: () => clsx(commonStyles.container, selectContainerClass),
          control: ({ isFocused }) =>
            clsx(
              isFocused
                ? commonStyles.control.focus
                : commonStyles.control.nonFocus,
              commonStyles.control.base,
              selectControlClass
            ),
          placeholder: () => commonStyles.placeholder,
          input: () => commonStyles.selectInput,
          valueContainer: () =>
            clsx(showSearchIcon ? (commonStyles.valueContainer, "!pl-14") : ""),
          singleValue: () => commonStyles.singleValue,
          multiValue: () => {
            `${commonStyles.multiValue} ${multiValueClass}`;
          },
          multiValueLabel: () => commonStyles.multiValueLabel,
          multiValueRemove: () => commonStyles.multiValueRemove,
          indicatorsContainer: () => commonStyles.indicatorsContainer,
          clearIndicator: () => commonStyles.clearIndicator,
          indicatorSeparator: () => commonStyles.indicatorSeparator,
          dropdownIndicator: () => commonStyles.dropdownIndicator,
          menu: () => commonStyles.menu,
          groupHeading: () => commonStyles.groupHeading,
          option: ({ isFocused, isSelected }) =>
            clsx(
              isFocused && commonStyles.option.focus,
              isSelected && commonStyles.option.selected,
              commonStyles.option.base
            ),
          noOptionsMessage: () => commonStyles.noOptionsMessage,
        }}
      />
      {error && touched && (
        <p className="mb-0 pt-1 text-xs text-red-400">{error}</p>
      )}
    </div>
  );
};

export default CreatableSelectComponent;
