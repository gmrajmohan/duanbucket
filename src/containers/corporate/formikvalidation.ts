import * as yup from "yup";

export const CorpratevalidationSchema = yup.object({
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
    organization : yup.string().required("Organization is required"),
    country: yup.string().required("Country is required"),
    location: yup.string().required("Location is required"),
    participants: yup.string().required("Participants is required"),
    course: yup.string().required("Program is required"),

  });