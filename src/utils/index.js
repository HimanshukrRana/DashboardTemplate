
/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// import { ROUTE_META } from "./constants";
export const handleErrors = (error, keyName, callback) => {
  switch (error?.response?.status) {
    case 500:
      console.log("Internal Server Error, Please try again.");
      break;
    case 401:
      console.log("Unauthorized access, Please login and try again.");
      callback && callback("", error.data);
      break;
    case 400:
      console.log("Bad Request, Please try again.");
      callback && callback("", error.data);
      break;
    default:
      console.log("Unexpected error occurred, Please try again.", error);
      break;
  }
};

export function CurrencyFormatter({ value, currency, shortener = false }) {
  if (!value) {
    return 0;
  }

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency ? currency : "INR",
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

  return shortener
    ? typeof formattedValue === "string"
      ? formattedValue
      : formatter.format(formattedValue) + (item ? item.symbol : "")
    : formatter.format(value);
}

export function DateFormatter({ value, formatter = "L" }) {
  if (!value) {
    return "-";
  }
  let date = moment(new Date(value)).format(formatter);
  return date;
}

export function DateFormatterGetDay(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  const timeDifferenceInSeconds = Math.floor((date - now) / 1000);

  if (timeDifferenceInSeconds > 0) {
    // Future date
    if (timeDifferenceInSeconds < 60) {
      return `In ${timeDifferenceInSeconds} seconds`;
    } else if (timeDifferenceInSeconds < 60 * 5) {
      return `In 5 minutes`;
    } else if (timeDifferenceInSeconds < 60 * 10) {
      return `In 10 minutes`;
    } else if (timeDifferenceInSeconds < 60 * 60) {
      const minutesRemaining = Math.floor(timeDifferenceInSeconds / 60);
      return `In ${minutesRemaining} minutes`;
    } else if (timeDifferenceInSeconds < 60 * 60 * 24) {
      const hoursRemaining = Math.floor(timeDifferenceInSeconds / (60 * 60));
      return `In ${hoursRemaining} hours`;
    } else {
      // Future date more than a day away
      const options = { year: "numeric", month: "long", day: "numeric" };
      return `On ${date.toLocaleDateString(undefined, options)}`;
    }
  } else if (timeDifferenceInSeconds < 0) {
    // Past date
    const isToday = now.toDateString() === date.toDateString();
    if (isToday) {
      return `today`;
    }

    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = yesterday.toDateString() === date.toDateString();
    if (isYesterday) {
      return `1 day ago`;
    }

    const daysAgo = Math.floor(-timeDifferenceInSeconds / (60 * 60 * 24));
    return `${daysAgo} days ago`;
  } else {
    return `just now`;
  }
}


export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};


export const handlelogout = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("accessToken");
    window.localStorage.clear();
    window.location.href = "/";
  }
};

export const getFullName = ({ value }) => {
  return value.first_name + " " + value.last_name;
};

export const getTokenData = () => {
  try {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      return JSON.parse(atob(token.split(".")[1]));
    }
  } catch (e) {
    return null;
  }
};

export function useValidRoute(pathname, loggedIn) {
  const [route, setRoute] = useState(); //valid route state
  const storeData = useSelector((state) => state.common);
  const handleValidatingRoute = () => {
    // Local testing with custom route

    const data = {
      is_profile_pending: storeData?.is_profile_pending,
      is_profile_done: storeData?.is_profile_done,
    };

    for (let i = 0; i < ROUTE_META.length; i++) {
      //checking for each key in Route meta
      // if the key is true in returned data && (either its the last key in the array || its next key is false in data)
      if (
        data[ROUTE_META[i].key] &&
        (i === ROUTE_META.length - 1 || !data[ROUTE_META[i + 1].key])
      ) {
        if (!ROUTE_META[i].block) {
          //if we have to allow
          if (!ROUTE_META[i].payload.includes(pathname)) {
            //check if pathname doesnt exists in payload
            setRoute(ROUTE_META[i].payload[0]); //goto pathname
          } else setRoute(pathname); //do nothing
        } else {
          //if we have to block
          if (ROUTE_META[i].payload.includes(pathname)) {
            //if pathname exists in payload
            setRoute(ROUTE_META[i].redirect); //block and take us somewhere else
          } else setRoute(pathname); //else do nothing
        }
        return; //if we go inside the if condition of a key break the function
      }
    }
    //IMPORTANT: think twice before altering the below URL, this is the url to redirect to in case the user is logged in but no details have been submitted.
    setRoute("/");
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accessToken = window.localStorage.getItem("accessToken");
    if (!accessToken) {
      // If there is no access token we set the valid route to "/".
      setTimeout(() => {
        setRoute("/");
      }, 1000);
      return;
    }
    handleValidatingRoute();
  }, [loggedIn]);
  return route; //return the route state
}

export const getData = (data, id) => {
  let array = data;
  return array && array.find((element) => element.id === id);
};