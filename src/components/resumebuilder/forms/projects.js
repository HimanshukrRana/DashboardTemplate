import React from "react";
import { updateDataByKey } from "@/store/actions";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import InputComponent from "@/components/input";
import { employmentTypeList } from "@/utils/data/navigation";
import CreatableSelectComponent from "@/components/input/select";

export default function Projects() {
  return (
    <div>
      <div>
        <div className="py-4 px-8 border-b border-gray-200">
          <h1 className="font-bold text-2xl">Projects</h1>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            link: "",
            title: "",
            associatedwith: "",
            description: "",
            startDate: "",
            endDate: "",
          }}
          validationSchema={yup.object().shape({
            title: yup.string().required("title is required"),
          })}
          onSubmit={(values) => {
            dispatch(
              updateDataByKey("resumeData", {
                ...storeData.resumeData,
                projects: { ...values },
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
                        value={values.title}
                        name="title"
                        onChange={handleChange}
                        placeholder="title"
                        is_error={errors.title}
                        errorMessage={errors.title}
                        className=""
                        label="Title"
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
                        value={values.link}
                        name="link"
                        onChange={handleChange}
                        placeholder="https://"
                        is_error={errors.link}
                        errorMessage={errors.link}
                        className=""
                        label="Project link"
                      />
                    </div>
                    <div className="mb-3 w-1/2">
                      <CreatableSelectComponent
                        iconName={""}
                        label={"Associated With"}
                        dataList={[]}
                        keyName={"associatedwith"}
                        setFieldValue={setFieldValue}
                        value={values.associatedwith}
                        selectContainerClass="!max-w-full w-full"
                        selectControlClass="!bg-white"
                        required={false}
                        multiple
                        placeholder="Please Select"
                      />
                    </div>
                  </div>
                  <InputComponent
                    value={values.description}
                    name="description"
                    onChange={handleChange}
                    placeholder={""}
                    label="Description"
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
