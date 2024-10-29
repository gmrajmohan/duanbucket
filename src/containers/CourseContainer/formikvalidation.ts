import * as yup from "yup";


export const CoursevalidationSchema = yup.object({
    name: yup
      .string()
      .trim("The Name cannot include leading spaces")
      .strict(true)
      .required("Name is required"),
    mobile: yup
      .string()
      .trim("The Mobile cannot include leading spaces")
      .strict(true)
      .matches(/[0-9]{10}/, "Mobile Number should be 10 digits")
      .required("Mobile Number is required"),
    email: yup
      .string()
      .trim("The Email cannot include leading spaces")
      .strict(true)
      .required("Email is required"),
    profile : yup.string().required("Profile is required"),
    state: yup.string().required("State is required"),
    district: yup.string().required("District is required"),
    centre: yup.string().required("Centre is required"),
  });