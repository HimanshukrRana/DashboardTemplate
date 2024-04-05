import InputComponent from "@/components/input";
import { updateDataByKey } from "@/store/actions";
import { Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

export default function PersonalInfo() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.common);

  console.log(storeData, "storedata");
  return (
    <div>
      <div>
        <div className="py-4 px-8 border-b border-gray-200">
          <h1 className="font-bold text-2xl">Personal Information</h1>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            name: "",
            email: "",
            phone: "",
            link: "",
            city: "",
          }}
          validationSchema={yup.object().shape({
            name: yup.string().required("fullName is required"),
            email: yup
              .string()
              .email("Invalid email format")
              .required("Company Email is required"),
            // phone: yup.number().required("Phone Number is required"),
          })}
          onSubmit={(values) => {
            dispatch(updateDataByKey("personalInfo", { ...values }));
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
                <div>
                  <div className="py-2 px-8">
                    <div className="mb-1">
                      <label htmlFor="name">Name *</label>
                    </div>
                    <div>
                      <InputComponent
                        value={values.name}
                        name="name"
                        onChange={handleChange}
                        placeholder="Name"
                        is_error={errors.name}
                        errorMessage={errors.name}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="py-2 px-8">
                    <div className="mb-1">
                      <label htmlFor="email">Email </label>
                    </div>
                    <div>
                      <InputComponent
                        value={values.email}
                        name="email"
                        onChange={handleChange}
                        placeholder="Email"
                        is_error={errors.email}
                        errorMessage={errors.email}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="py-2 px-8">
                    <div className="mb-1">
                      <label htmlFor="phone">Phone Number </label>
                    </div>
                    <div>
                      <InputComponent
                        value={values.phone}
                        name="phone"
                        onChange={handleChange}
                        placeholder="phone"
                        is_error={errors.phone}
                        errorMessage={errors.phone}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="py-2 px-8">
                    <div className="mb-1">
                      <label htmlFor="link">Website link</label>
                    </div>
                    <div>
                      <InputComponent
                        value={values.link}
                        name="link"
                        onChange={handleChange}
                        placeholder="Website link"
                        is_error={errors.link}
                        errorMessage={errors.link}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="py-2 px-8">
                    <div className="mb-1">
                      <label htmlFor="city">City</label>
                    </div>
                    <div>
                      <InputComponent
                        value={values.city}
                        name="city"
                        onChange={handleChange}
                        placeholder="Website city"
                        is_error={errors.city}
                        errorMessage={errors.city}
                        className=""
                      />
                    </div>
                  </div>
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
  );
}
