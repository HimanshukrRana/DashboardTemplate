import { updateDataByKey } from "@/store/actions";
import { InlineIcon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const menuLinks = [
  {
    label: "Personal Information",
    tab: "presonalInfo",
    icons: "fe:layer",
  },
  {
    label: "Education",
    tab: "education",
    icons: "mingcute:announcement-line",
  },
  {
    label: "Experience",
    tab: "experience",
    icons: "f7:bolt-fill",
  },
  {
    label: "Projects",
    tab: "projects",
    icons: "tabler:bookmark",
  },
  {
    label: "Achivements",
    tab: "acheivements",
    icons: "lets-icons:setting-line",
  },
  {
    label: "Skills",
    tab: "skills",
    icons: "heroicons-outline:logout",
  },
  {
    label: "Summary",
    tab: "summary",
    icons: "heroicons-outline:logout",
  },
];

export default function Navigation({ activeTab, setActiveTab }) {
  // const dispatch = useDispatch();
  // const storeData = useSelector((state) => state.common);
  // console.log(storeData, "storeData");

  // function handletabChange(items) {
  //   console.log(items, "tabbass");
  //   dispatch(updateDataByKey("navigatetab", items.tab));
  // }

  // useEffect(() => {
  //   dispatch(updateDataByKey("navigatetab", undefined));
  // }, []);

  return (
    <div className="">
      <div className="p-4 flex flex-col gap-4">
        {menuLinks.map((items, index) => (
          <div
            className={`flex  gap-2 p-2 cursor-pointer hover:bg-gray-200 rounded-lg ${
              activeTab === index ? "bg-gray-200" : ""
            }`}
            key={index}
            onClick={() => setActiveTab(index)}
          >
            <div>
              <InlineIcon
                icon={items.icons}
                width={30}
                className="text-gray-600"
              />
            </div>
            <p className={`text-base font-medium  `}>{items.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
