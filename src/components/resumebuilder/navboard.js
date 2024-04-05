import React from "react";
import Navigation from "./navigation";
import PersonalInfo from "./forms/personalInfo";
import Summary from "./forms/summary";
import Achivements from "./forms/achivement";
import { useSelector } from "react-redux";
import Skills from "./forms/skills";
import Experience from "./forms/experience";
import Education from "./forms/educationInfo";

export default function NavBoard() {
  const storeData = useSelector((state) => state.common);
  console.log(storeData, "storeData");

  return (
    <div className="border border-gray-200 shadow-2xl rounded-lg h-[600px] mt-2 w-full flex">
      <div className="w-[30%] h-full border-r border-gray-200 ">
        <Navigation />
      </div>
      <div className="w-[70%] h-full relative">
        {storeData.navigatetab ? (
          (storeData.navigatetab === "presonalInfo" && <PersonalInfo />) ||
          (storeData.navigatetab === "education" && <Education />) ||
          (storeData.navigatetab === "experience" && <Experience />) ||
          (storeData.navigatetab === "acheivements" && <Achivements />) ||
          (storeData.navigatetab === "skills" && <Skills />) ||
          (storeData.navigatetab === "summary" && <Summary />)
        ) : (
          <PersonalInfo />
        )}
      </div>
    </div>
  );
}
