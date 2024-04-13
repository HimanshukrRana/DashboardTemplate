import React from "react";
import { updateDataByKey } from "@/store/actions";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import InputComponent from "@/components/input";

export default function Education() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.common);

  return (
    <div>
      <div className="py-4 px-8  border-b border-gray-200">
        <h1 className="font-bold text-2xl">Education</h1>
      </div>
      <Formik
        enableReinitialize
        initialValues={{
          institute: "",
          activities: "",
          startDate: "",
          endDate: "",
          degree: "",
          grade: "",
          field: "",
          description: "",
        }}
        validationSchema={yup.object().shape({
          institute: yup.string().required("institute is required"),
          activities: yup.string(),
          startDate: yup.date(),
          degree: yup.string(),
          activities: yup.string(),
        })}
        onSubmit={(values) => {
          dispatch(
            updateDataByKey("resumeData", {
              ...storeData.resumeData,
              educationalInfo: { ...values },
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
                  <div className="mb-1">
                    <label htmlFor="name">
                      Institute name
                      <span className="text-red-400">*</span>
                    </label>
                  </div>
                  <div>
                    <InputComponent
                      value={values.institute}
                      name="institute"
                      onChange={handleChange}
                      placeholder="Name"
                      is_error={errors.institute}
                      errorMessage={errors.institute}
                      className=""
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
                <div className="py-2 ">
                  <div className="mb-1">
                    <label htmlFor="email">Degree </label>
                  </div>
                  <div>
                    <InputComponent
                      value={values.degree}
                      name="degree"
                      onChange={handleChange}
                      placeholder="degree"
                      is_error={errors.degree}
                      errorMessage={errors.degree}
                      className=""
                    />
                  </div>
                </div>
                <div className="py-2 flex gap-6">
                  <div className="mb-3 w-1/2">
                    <InputComponent
                      value={values.field}
                      name="field"
                      onChange={handleChange}
                      placeholder="field"
                      is_error={errors.field}
                      errorMessage={errors.field}
                      className=""
                      label="Enter Field of Study"
                    />
                  </div>
                  <div className="mb-3 w-1/2">
                    <InputComponent
                      value={values.grade}
                      name="grade"
                      onChange={handleChange}
                      placeholder=""
                      is_error={errors.grade}
                      errorMessage={errors.grade}
                      className=""
                      label="Grade"
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
                  value={values.description}
                  name="description"
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
  );
}
