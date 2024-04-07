import React from "react";
import PersonalInfo from "./personalInfo";
import Education from "./educationInfo";
import Experience from "./experience";
import Achivements from "./achivement";
import Skills from "./skills";
import Summary from "./summary";

export default function Allforms({ activeTab }) {
  console.log(activeTab, "activeTab");
  return (
    <div>
      <div className={`${activeTab === 0 ? "" : "hidden"}`}>
        <PersonalInfo />
      </div>
      <div className={`${activeTab === 1 ? "" : "hidden"}`}>
        <Education />
      </div>
      <div className={`${activeTab === 2 ? "" : "hidden"}`}>
        <Experience />
      </div>
      <div className={`${activeTab === 3 ? "" : "hidden"}`}>
        <Achivements />
      </div>
      <div className={`${activeTab === 4 ? "" : "hidden"}`}>
        <Skills />
      </div>
      <div className={`${activeTab === 6 ? "" : "hidden"}`}>
        <Summary />
      </div>
    </div>
  );
}
