import React from "react";
import { updateDataByKey } from "@/store/actions";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import InputComponent from "@/components/input";
import { employmentTypeList } from "@/utils/data/navigation";
import CreatableSelectComponent from "@/components/input/select";

export default function Experience() {
  return (
    <div>
      <div>
        <div className="py-4 px-8 border-b border-gray-200">
          <h1 className="font-bold text-2xl">Experience</h1>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            company: "",
            jobtitle: "",
            employmentType: "",
            description: "",
            startDate: "",
            endDate: "",
          }}
          validationSchema={yup.object().shape({
            company: yup.string().required("company is required"),
            activities: yup.string(),
          })}
          onSubmit={(values) => {
            dispatch(
              updateDataByKey("resumeData", {
                ...storeData.resumeData,
                experienceInfo: { ...values },
              })
            );
            console.log(values, "submitted values");
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
                <div className="px-8">
                  <div className="py-2 ">
                    <div>
                      <InputComponent
                        value={values.company}
                        name="company"
                        onChange={handleChange}
                        placeholder="Name"
                        is_error={errors.company}
                        errorMessage={errors.company}
                        className=""
                        label="Company Name"
                      />
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="mb-3 w-1/2">
                      <InputComponent
                        type="date"
                        value={values.startDate}
                        name="startDate"
                        onChange={handleChange}
                        placeholder="Start Date"
                        label="Start Date"
                        is_error={errors.startDate && touched.startDate}
                        errorMessage={errors.startDate}
                        className="!max-w-full uppercase"
                        isRequired
                      />
                    </div>
                    <div className="mb-3 w-1/2">
                      <InputComponent
                        type="date"
                        value={values.endDate}
                        name="endDate"
                        onChange={handleChange}
                        placeholder="End Date"
                        label="End Date"
                        is_error={errors.endDate && touched.endDate}
                        errorMessage={errors.endDate}
                        className="!max-w-full uppercase"
                        isRequired
                        disabled={values.inProgress}
                      />
                    </div>
                  </div>
                  <div className="py-2 flex gap-6">
                    <div className="mb-3 w-1/2">
                      <InputComponent
                        value={values.jobtitle}
                        name="jobtitle"
                        onChange={handleChange}
                        placeholder="jobtitle"
                        is_error={errors.jobtitle}
                        errorMessage={errors.jobtitle}
                        className=""
                        label="Enter jobtitle "
                      />
                    </div>
                    <div className="mb-3 w-1/2">
                      <CreatableSelectComponent
                        iconName={""}
                        label={"Employment Type"}
                        dataList={employmentTypeList}
                        keyName={"employmentType"}
                        setFieldValue={setFieldValue}
                        value={values.employmentType}
                        selectContainerClass="!max-w-full w-full"
                        selectControlClass="!bg-white"
                        required={false}
                        multiple
                        placeholder="Choose a Experience Type"
                      />
                    </div>
                  </div>

                  <InputComponent
                    value={values.activities}
                    name="activities"
                    onChange={handleChange}
                    placeholder=""
                    is_error={errors.activities}
                    errorMessage={errors.activities}
                    className=""
                    label="Activities"
                  />
                  <InputComponent
                    value={values.discription}
                    name="discription"
                    onChange={handleChange}
                    placeholder={""}
                    label="Discription"
                    className=" py-2 !h-[100px]"
                    type="textarea"
                    maxLength="200"
                  />
                </div>
                <div className="p-4 flex justify-end border-t border-gray-200 ">
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
  );
}
