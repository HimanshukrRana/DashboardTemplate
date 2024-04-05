import React, { Fragment } from "react";
import PropTypes from "prop-types";

import styles from "./Input.module.scss";

const InputComponent = (props) => {
  const {
    wrapClassName,
    className,
    labelClassName,
    onChange,
    onBlur,
    value,
    placeholder,
    params,
    onBlurHandler,
    fieldName,
    maxLength,
    inputRef,
    label,
    subLabel = "",
    isRequired = true,
    readOnly,
    checked,
    htmlFor,
    name,
    is_error,
    errorMessage,
    error_classname,
    bgVariant,
    ...attributeProp
  } = props;

  const Component =
    props.type && props.type == "textarea" ? props.type : "input";

  return (
    <Fragment>
      {props.type == "checkbox" ? (
        <input
          className={className}
          checked={checked}
          name={name}
          {...attributeProp}
        />
      ) : (
        <div className={wrapClassName}>
          {/* <label
            htmlFor={htmlFor}
            className={labelClassName ? labelClassName : styles.label}
          >
            {label} {isRequired && <span className="text-red-400">*</span>}
          </label>
          <p className="text-sm text-gray-400 mb-1">{subLabel}</p> */}
          <div className="relative">
            <Component
              defaultValue={value}
              placeholder={placeholder}
              type={props.type}
              checked={checked}
              onChange={(e) => onChange(e, params)}
              onBlur={(e) => onBlurHandler(e, params)}
              maxLength={maxLength}
              ref={inputRef}
              readOnly={readOnly}
              name={name}
              className={`${styles.inputBox} ${className}`}
              {...attributeProp}
            />
          </div>
          {is_error && (
            <p className={`mb-0 pt-1 text-xs text-red-400 ${error_classname}`}>
              {errorMessage}
            </p>
          )}
        </div>
      )}
    </Fragment>
  );
};

InputComponent.propTypes = {
  onChange: PropTypes.any.isRequired,
  onBlur: PropTypes.any,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.string,
  value: PropTypes.any,
  inputTypeCheck: PropTypes.func,
};

InputComponent.defaultProps = {
  type: "input",
  maxLength: "50",
  onChange: () => {},
  params: null,
  onBlurHandler: () => {},
  fieldName: null,
};

export default InputComponent;
