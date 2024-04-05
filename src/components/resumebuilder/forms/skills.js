import React from "react";

export default function Skills() {
  return (
    <div>
      <div>
        <div className="py-4 px-8 border-b border-gray-200">
          <h1 className="font-bold text-2xl">Skills</h1>
        </div>
        <div>
          <div className="py-2 px-8">
            <div className="mb-1">
              <label htmlFor="skills">Skills *</label>
            </div>
            <div>
              <input
                id="skills"
                type="text"
                className="px-2 border border-gray-200 rounded-lg w-full h-[40px]"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="p-4 flex justify-end border-t border-gray-200 absolute bottom-0 right-0 left-0">
          <button className="px-6 py-2 text-lg rounded-lg  bg-black border text-white">
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}
