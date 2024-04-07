import React, { useEffect, useState } from "react";
import Navigation from "./navigation";
import PersonalInfo from "./forms/personalInfo";
import Summary from "./forms/summary";
import Achivements from "./forms/achivement";
import { useSelector, useDispatch } from "react-redux";
import Skills from "./forms/skills";
import Experience from "./forms/experience";
import Education from "./forms/educationInfo";
import { updateDataByKey } from "@/store/actions";
import Allforms from "./forms/allforms";

export default function NavBoard() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="border border-gray-200 shadow-2xl rounded-lg h-[600px] mt-2 w-full flex">
      <div className="w-[30%] h-full border-r border-gray-200 ">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="w-[70%] h-full relative">
        <Allforms activeTab={activeTab} />
      </div>
    </div>
  );
}
