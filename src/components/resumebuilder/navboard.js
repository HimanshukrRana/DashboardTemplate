import React, { useEffect, useState } from "react";
import Navigation from "./navigation";
import Allforms from "./forms/allforms";

export default function NavBoard() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="border border-gray-200 shadow-2xl rounded-lg  mt-2 w-full flex">
      <div className="w-[30%]  border-r border-gray-200 ">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="w-[70%]  relative">
        <Allforms activeTab={activeTab} />
      </div>
    </div>
  );
}
