import InputComponent from "@/components/input";
import { updateDataByKey } from "@/store/actions";
import { Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Summary() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.common);

  console.log(storeData, "storedata");
  return (
    <div className="">
      <div>
        <div className="py-4 px-8 border-b border-gray-200">
          <h1 className="font-bold text-2xl">Summary</h1>
        </div>
        <div>
          <div className="py-2 px-8">
            <Formik
              enableReinitialize
              initialValues={{
                summary: "",
              }}
              onSubmit={(values) => {
                dispatch(
                  updateDataByKey("resumeData", {
                    ...storeData.resumeData,
                    summary: values,
                  })
                );
              }}
            >
              {({
                handleSubmit,
                handleChange,
                touched,
                errors,
                values,
                setFieldValue,
              }) => {
                return (
                  <div>
                    <div className="mb-1">
                      <label htmlFor="">Summary</label>
                    </div>
                    <div>
                      {/* <textarea
                        id="details"
                        type="text"
                        placeholder="Enter Your Summar Details"
                        value={values.summary}
                        name="summary"
                        onChange={handleChange}
                      /> */}
                      <InputComponent
                        type="textArea"
                        value={values.summary}
                        name="summary"
                        onChange={handleChange}
                        placeholder=""
                        is_error={errors.summary}
                        errorMessage={errors.summary}
                        className="px-2 border border-gray-200 rounded-lg w-full h-[140px]"
                      />
                    </div>

                    <div className="p-4 flex justify-end border-t border-gray-200 absolute bottom-0 right-0 left-0">
                      <button
                        onClick={handleSubmit}
                        className="px-6 py-2 text-lg rounded-lg  bg-black border text-white"
                      >
                        SAVE
                      </button>
                    </div>
                  </div>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
