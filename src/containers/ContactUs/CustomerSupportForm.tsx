import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import { SelectQueryOption } from "./SelectOption";
import Select from "@/components/select";
import Input from "@/components/input";
import ContactusCustomTextArea from "./ContactusCustomTextArea";
import GetStateFun from "@/pages/api/state";
import GetDistrict from "@/pages/api/distict";
import GetCenter from "@/pages/api/center";
import { Oval } from "react-loader-spinner";
import { useRouter } from "next/router";
import { Button } from "@material-tailwind/react";
import Heading from "@/components/Heading";
import Captcha from "../home/Captcha";
const validationSchema = yup.object({
  selectquery: yup
    .string()
    .trim("The Name cannot include leading spaces")
    .strict(true)
    .required("Query is required"),
  FullName: yup
    .string()
    .trim("The Name cannot include leading spaces")
    .strict(true)
    .required("Name is required"),
  student_no: yup
    .string()
    .trim("The Name cannot include leading spaces")
    .strict(true)
    .required("Student ID is required"),
  mobile: yup
    .string()
    .trim("The Name cannot include leading spaces")
    .strict(true)
    .required("Mobile number is required"),
  email: yup
    .string()
    .trim("The Name cannot include leading spaces")
    .strict(true)
    .required("Email is required"),
  state: yup
    .string()
    .trim("The Name cannot include leading spaces")
    .strict(true)
    .required("State is required"),
  district: yup
    .string()
    .trim("The Name cannot include leading spaces")
    .strict(true)
    .required("City is required"),
  centre: yup
    .string()
    .trim("The Name cannot include leading spaces")
    .strict(true)
    .required("Center is required"),
  message: yup
    .string()
    .trim("The Name cannot include leading spaces")
    .strict(true)
    .required("Message is required"),
});

interface centreInterface {
  centreCode: number;
  centreName: string;
}
[];

const Customer_Support_Form = () => {
  const [State, setState] = useState([]);
  const [StateId, GetStateId] = useState<string>();
  const [district, setDistrict] = useState();
  const [DistrictId, setDistrictId] = useState<string>();
  const [Message, getMessage] = useState<string>();
  const [Clicked, setClciked] = useState(false);
  const [Msg, setMsg] = useState("");
  const [errStatus, seterrStatus] = useState<number>();
  const [errMgs, seterrMgs] = useState<any>();
  const [centre, GetCenterList] = useState([]);
  const [Loader, setLoader] = useState(false);
  const [captchaValues, setcaptchaValues] = useState<boolean>();

  const rout = useRouter();
  const path = rout.asPath;
  const router = useRouter();
  const { adpage } = router.query;
  const { adpage_id } = router.query; //getting adpage id from url
  const { campaign } = router.query; //getting campain name from url

  const handleSelectChange = (event: any, formicChange: any) => {
    formicChange(event);
  };

  const HandleCaptchaResponce = (data: any) => {
    setcaptchaValues(data);
  };
  useEffect(() => {
    const State = process.env.NEXT_PUBLIC_COMMEN__STATE_API;
    GetStateFun(State, setState);
  }, []);

  useEffect(() => {
    if (StateId !== undefined && StateId !== "") {
      const district = process.env.NEXT_PUBLIC_COMMEN__DISTRICT_API;
      GetDistrict(`${district}`, setDistrict, StateId);
    }
  }, [StateId]);

  useEffect(() => {
    if (DistrictId !== undefined) {
      const centre = process.env.NEXT_PUBLIC_COMMEN__CENTRE_API;
      GetCenter(`${centre}`, GetCenterList, DistrictId);
    }
  }, [DistrictId]);

  const Cents =
    centre &&
    centre.reduce((accumulator: any, values: centreInterface, index: any) => {
      const newObj = {
        id: values.centreCode,
        name: values.centreName,
      };
      accumulator.push(newObj);
      return accumulator;
    }, []);

  const HandleSubmitClick = () => {
    setClciked(true);
  };

  const ServerValidation = (Msg: string, errStatus: number | undefined) => {
    if (Msg == "Validation Error" && errStatus == 201) {
      setClciked(false);
    }
  };

  useEffect(() => {
    setClciked(false);
  }, [Msg]);

  return (
    <>
      <Heading
        type={18}
        content="Reach out to us for queries, feedback and more. Please fill the form to generate a ticket ID. Our Customer support team will get in touch within 48 business hours."
      />
      <div className="lg:max-w-3xl m-auto lg:px-20 lg:gap-10 px-6 mt-6 border bg-[#1A3F59] py-6">
        {Msg !== "" && errStatus == 200 && (
          <p className="text-center text-green-400 text-xl font-semibold">
            {Msg}
          </p>
        )}

        <Heading type={19} content="Customer Support" />
        <Formik
          initialValues={{
            selectquery: "",
            FullName: "",
            student_number: "",
            mobile: "",
            email: "",
            state: "",
            district: "",
            centre: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {}}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
            dirty,
          }) => (
            <>
              <div className={``}>
                <Select
                  name="selectquery"
                  label={"Select Query"}
                  options={SelectQueryOption}
                  value={values.selectquery}
                  contact={true}
                  onChange={(event: any) => {
                    handleSelectChange(event, handleChange);
                    handleChange;
                  }}
                  onBlur={(event: any) => {
                    handleBlur;
                    seterrMgs("");
                    setLoader(false);
                    setMsg("");
                    seterrStatus(0);
                  }}
                  errors={errors}
                />
                {errors.selectquery && touched.selectquery && (
                  <span className="text-red-400 font-medium">
                    {errors.selectquery}
                  </span>
                )}
              </div>

              <div className="mt-4">
                <Input
                  name={"FullName"}
                  placeholder={"Name"}
                  type="text"
                  
                  contact={true}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    handleChange(event);
                  }}
                  onBlur={(event: any) => {
                    handleBlur;
                    seterrMgs("");
                    setLoader(false);
                    setMsg("");
                    seterrStatus(0);
                  }}
                  value={values.FullName}
                />
                {errors.FullName && touched.FullName && (
                  <span className="text-red-400 font-medium">
                    {errors.FullName}
                  </span>
                )}
                {errStatus == 201 &&
                  errMgs.err_FullName &&
                  errMgs.err_FullName != "" && (
                    <div className="m-auto">
                      <div
                        className="p-2  text-sm text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 max-w-max	"
                        role="alert"
                      >
                        {errMgs.err_FullName}
                      </div>
                    </div>
                  )}
              </div>

              <div className="grid lg:grid-cols-2 lg:gap-4 mt-4 lg:mb-0">
                <div className="lg:mb-0 mb-4">
                  <Input
                    name={"student_number"}
                    placeholder={"Student ID"}
                    type="text"
                    contact={true}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      handleChange(event);
                    }}
                    onBlur={(event: any) => {
                      handleBlur;
                      seterrMgs("");
                      setLoader(false);
                      setMsg("");
                      seterrStatus(0);
                    }}
                    value={values.student_number}
                  />
                  {errors.student_number && touched.student_number && (
                    <span className="text-red-400 font-medium">
                      {errors.student_number}
                    </span>
                  )}
                  {errStatus == 201 &&
                    errMgs.err_student_number &&
                    errMgs.err_student_number != "" && (
                      <div className="m-auto">
                        <div
                          className="p-2  text-sm text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 max-w-max	"
                          role="alert"
                        >
                          {errMgs.err_student_number}
                        </div>
                      </div>
                    )}
                </div>
                <div>
                  <Input
                    name={"mobile"}
                    placeholder={"Mobile"}
                    type="phone"
                    contact={true}
                    
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      handleChange(event);
                    }}
                    onBlur={(event: any) => {
                      handleBlur;
                      seterrMgs("");
                      setLoader(false);
                      setMsg("");
                      seterrStatus(0);
                    }}
                    value={values.mobile}
                  />
                  {errors.mobile && touched.mobile && (
                    <span className="text-red-400 font-medium">
                      {errors.mobile}
                    </span>
                  )}
                  {errStatus == 201 &&
                    errMgs.err_mobile &&
                    errMgs.err_mobile != "" && (
                      <div className="m-auto">
                        <div
                          className="p-2  text-sm text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 max-w-max	"
                          role="alert"
                        >
                          {errMgs.err_mobile}
                        </div>
                      </div>
                    )}
                </div>
              </div>
              <div className="grid lg:grid-cols-2 lg:gap-4  mt-4">
                <div className="lg:mb-0 mb-4">
                  <Input
                    name={"email"}
                    placeholder={"Email"}
                    type="text"
                    contact={true}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      handleChange(event);
                    }}
                    onBlur={(event: any) => {
                      handleBlur;
                      seterrMgs("");
                      setLoader(false);
                      setMsg("");
                      seterrStatus(0);
                    }}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <span className="text-red-400 font-medium">
                      {errors.email}
                    </span>
                  )}
                  {errStatus == 201 &&
                    errMgs.err_email &&
                    errMgs.err_email != "" && (
                      <div className="m-auto">
                        <div
                          className="p-2  text-sm text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 max-w-max	"
                          role="alert"
                        >
                          {errMgs.err_email}
                        </div>
                      </div>
                    )}
                </div>
                <div>
                  <Select
                    name="state"
                    label={"state"}
                    initialOption={"Select State"}
                    options={State}
                    contact={true}
                    value={values.state}
                    onChange={(event: any) => {
                      handleSelectChange(event, handleChange);
                      handleChange;
                      GetStateId(event.target.value);
                    }}
                    onBlur={(event: any) => {
                      handleBlur;
                      seterrMgs("");
                      setLoader(false);
                      setMsg("");
                      seterrStatus(0);
                    }}
                    errors={errors}
                  />
                  {errors.state && touched.state && (
                    <span className="text-red-400 font-medium">
                      {errors.state}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid lg:grid-cols-2 lg:gap-4  mt-4">
                <div className="lg:mb-0 mb-4">
                  <Select
                    name="district"
                    label={"district"}
                    initialOption={"Select City"}
                    options={district}
                    contact={true}
                    value={values.district}
                    onChange={(event: any) => {
                      handleSelectChange(event, handleChange);
                      handleChange;
                      setDistrictId(event.target.value);
                    }}
                    onBlur={(event: any) => {
                      handleBlur;
                      seterrMgs("");
                      setLoader(false);
                      setMsg("");
                      seterrStatus(0);
                    }}
                    errors={errors}
                  />
                  {errors.district && touched.district && (
                    <span className="text-red-400 font-medium">
                      {errors.district}
                    </span>
                  )}
                </div>

                <div>
                  <Select
                    name="centre"
                    label={"centre"}
                    initialOption={"Select centre"}
                    options={Cents}
                    value={values.centre}
                    contact={true}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                  />
                  {errors.district && touched.district && (
                    <span className="text-red-400 font-medium">
                      {errors.district}
                    </span>
                  )}
                </div>
              </div>
              {/* err_comments */}
              <div>
                <ContactusCustomTextArea
                  placHolder="Message"
                  onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                    getMessage(event.target.value);
                  }}
                  value={values.message}
                  onBlur={handleBlur}
                />
                {errMgs && errMgs.err_comments && (
                  <p className="flex justify-center text-red-500  text-sm ">
                    {errMgs && errMgs.err_comments}
                  </p>
                )}
              </div>

              <Captcha CaptchaResponceFromParent={HandleCaptchaResponce} />

              {errMgs && errMgs.err_captcha && (
                <p className="flex text-red-500  text-sm">
                  {errMgs && errMgs.err_captcha}
                </p>
              )}

              <div className="flex justify-center">
                {values.FullName !== "" &&
                values.FullName !== " " &&
                !errors.FullName &&
                values.mobile !== "" &&
                values.mobile !== " " &&
                !errors.mobile &&
                values.email !== "" &&
                values.email !== " " &&
                !errors.email &&
                values.state.length !== 0 &&
                values.state !== "" &&
                values.state !== "" &&
                values.district.length !== 0 &&
                values.district !== "" &&
                values.district !== "" &&
                values.centre.length !== 0 &&
                values.centre !== "" &&
                values.centre !== "" &&
                Clicked == true ? (
                  <Oval
                    ariaLabel="loading-indicator"
                    height={20}
                    width={80}
                    strokeWidth={5}
                    strokeWidthSecondary={5}
                    color="blue"
                    secondaryColor="white"
                    wrapperClass="flex justify-center mt-4"
                  />
                ) : (
                  <Button
                    type="button"
                    className="  bg-[#F58634] text-white  text-[14px] font-medium  rounded mt-4 px-6 py-2"
                    onClick={(event) => {
                      handleSubmit();
                      const formValues = {
                        ...values,
                        comments: Message,
                        captcha: captchaValues ?? "",
                      };

                      {
                        formValues.FullName !== "" &&
                          formValues.FullName !== " " &&
                          !errors.FullName &&
                          formValues.mobile !== "" &&
                          formValues.mobile !== " " &&
                          !errors.mobile &&
                          formValues.email !== "" &&
                          formValues.email !== " " &&
                          !errors.email &&
                          formValues.state.length !== 0 &&
                          formValues.state !== "" &&
                          formValues.state !== "" &&
                          formValues.district.length !== 0 &&
                          formValues.district !== "" &&
                          formValues.district !== "" &&
                          formValues.centre.length !== 0 &&
                          formValues.centre !== "" &&
                          formValues.centre !== "" &&
                          axios
                            .post(
                              "https://api-publicsite.caddcentre.com/api/syCustomerForm/",
                              formValues
                            )
                            .then(function (response) {
                              setMsg(response.data.message);
                              seterrStatus(response.status);
                              seterrMgs(response.data);
                              if (response.status == 201) {
                                ServerValidation(
                                  response.data.message,
                                  response.status
                                );
                              } else if (response.status == 200) {
                                setClciked(false);
                              }
                              if (response.status == 200) {
                                (values.FullName = ""),
                                  (values.mobile = ""),
                                  (values.email = ""),
                                  (values.centre = ""),
                                  (values.district = ""),
                                  (values.message = ""),
                                  (values.state = ""),
                                  (values.student_number = ""),
                                  () => getMessage("");
                              }
                            })
                            .catch(function (error) {});
                      }
                      {
                        formValues.FullName !== "" &&
                          formValues.FullName !== " " &&
                          !errors.FullName &&
                          formValues.mobile !== "" &&
                          formValues.mobile !== " " &&
                          !errors.mobile &&
                          formValues.email !== "" &&
                          formValues.email !== " " &&
                          !errors.email &&
                          formValues.state.length !== 0 &&
                          formValues.state !== "" &&
                          formValues.state !== "" &&
                          formValues.district.length !== 0 &&
                          formValues.district !== "" &&
                          formValues.district !== "" &&
                          formValues.centre.length !== 0 &&
                          formValues.centre !== "" &&
                          formValues.centre !== "" &&
                          HandleSubmitClick();
                      }
                    }}
                  >
                    Submit
                  </Button>
                )}
              </div>
            </>
          )}
        </Formik>
      </div>
    </>
  );
};
export default Customer_Support_Form;
