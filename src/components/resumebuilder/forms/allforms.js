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
    <div className="">
      {activeTab === 0 ? (
        <PersonalInfo />
      ) : activeTab === 1 ? (
        <Education />
      ) : activeTab === 2 ? (
        <Experience />
      ) : activeTab === 3 ? (
        ""
      ) : activeTab === 4 ? (
        <Achivements />
      ) : activeTab === 5 ? (
        <Skills />
      ) : activeTab === 6 ? (
        <Summary />
      ) : (
        ""
      )}
    </div>
  );
}
