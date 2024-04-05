import React from "react";
import moment from "moment";

export function CurrencyFormatter({
  value,
  currency,
  shortener = false,
  classNames,
}) {
  if (!value) {
    return 0;
  }

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency ? currency : "USD",
  });
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
  ];
  const item =
    shortener &&
    lookup
      .slice()
      .reverse()
      .find((item) => value >= item.value);

  const formattedValue = item ? value / item.value : value;

  return shortener ? (
    <div className={` ${classNames}`}>
      {typeof formattedValue === "string"
        ? formattedValue
        : formatter.format(formattedValue) + (item ? item.symbol : "")}
    </div>
  ) : (
    <div className={` ${classNames}`}>{formatter.format(value)}</div>
  );
}

export function DateFormatter({ value, formatter = "LL" }) {
  if (!value) {
    return "-";
  }
  let date = moment(new Date(value)).format(formatter);
  return date;
}

export const BackgroundFormatter = (userType) => {
  const jobTypeLowerCase = userType?.toLowerCase();
  console.log(jobTypeLowerCase, "jobTypeLowerCase");
  switch (jobTypeLowerCase) {
    case "full-time":
      return "bg-[#EEF1FF] text-[#554994]";
    case "part-time":
      return "bg-[#FFC0D9] text-[#FBF9F1]";
    case "contract":
      return "bg-[#F9B572] text-[#FBF9F1]";
    case "volunteer":
      return "bg-[#8DDFCB] text-[#374259]";
    case "internship":
      return "bg-[#DBDFEA] text-[#374259]";
    default:
      return "bg-[#815B5B] text-[#FAF7F0]";
  }
};
