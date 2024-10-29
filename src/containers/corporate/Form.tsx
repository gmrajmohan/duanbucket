import React, { useState, ChangeEvent, useContext } from "react";
import { useRouter } from "next/router";
import Input from "@/components/input";
import { Formik } from "formik";
import axios from "axios";
import Select from "@/components/select";
import Captcha from "../home/Captcha";
import { CorpratevalidationSchema } from "./formikvalidation";
import CourseContext from "@/Context/Course";

interface ErrorInterFace {
  err_organization: string;
  err_name: string;
  err_email: string;
  err_mobile: string;
  err_country: string;
  err_location: string;
  err_participants: string;
  err_course: string;
}

const Form = () => {
  const ErrObj = {
    err_organization: "",
    err_country: "",
    err_course: "",
    err_email: "",
    err_location: "",
    err_mobile: "",
    err_name: "",
    err_participants: "",
  };

  const [msg, setMsg] = useState<string>("");
  const [Loader, setLoader] = useState<boolean>(false);
  const [errMgs, setErrmsg] = useState<ErrorInterFace>(ErrObj); // response err
  const [errStatus, seterrStatus] = useState<number>(201);
  const [Success, setSuccess] = useState<string | number>();
  const [captchaValues, setcaptchaValues] = useState<boolean>();
  const router = useRouter();

  const { adpage } = router.query;
  const { ad } = router.query;
  const { cm } = router.query;

  const corpPageResponse = {
    enquryform: {
      country_list: [
        {
          name: "India",
          id: "India",
        },
        {
          name: "Overseas",
          id: "Overseas",
        },
      ],
    },

    status: 1,
    msg: "Success",
  };

  const HandleCaptchaResponce = (data: boolean) => {
    setcaptchaValues(data);
  };

  const {scrollToRef} = useContext(CourseContext)

  return (
    <>
      <div className="  mb-1 p-5 bg-[#193f58] mt-10">
        {Success &&
          Success != "" &&
          Success ==
            "Thank you for your interest, will get in touch with you shortly." && (
            <div
              className="p-2 m-auto text-sm text-center text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800 max-w-max	"
              role="alert"
            >
              {Success}
            </div>
          )}
        {Success !=
          "Thank you for your interest, will get in touch with you shortly." && (
          <>
            <h2
              className="text-white font-semibold text-2xl text-center"
              id="corporateForm"
             
            >
              Apply Now
            </h2>

            <div className="mt-4  m-auto">
              <Formik
                initialValues={{
                  organization: "",
                  name: "",
                  email: "",
                  mobile: "",
                  country: "",
                  location: "",
                  participants: "",
                  course: "",
                }}
                validationSchema={CorpratevalidationSchema}
                onSubmit={() => {}}
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
                  <form className={`formWrapper `}>
                    {Success != 200 && (
                      <>
                        {/* first part */}
                        <div className="md:flex gap-4">
                          <div className="lg:mb-0 mb-4">
                            <Input
                              name={"organization"}
                              placeholder={"Organization"}
                              type="text"
                              onChange={(
                                event: ChangeEvent<HTMLInputElement>
                              ) => {
                                handleChange(event);
                              }}
                              onBlur={() => {
                                handleBlur;
                                setLoader(false);
                                setMsg("");
                                seterrStatus(0);
                              }}
                              value={values.organization}
                            />
                            {errors.organization && touched.organization && (
                              <span className="text-red-400 font-medium">
                                {errors.organization}
                              </span>
                            )}

                            {errStatus == 201 &&
                              errMgs.err_organization &&
                              errMgs.err_organization != "" && (
                                <div className="m-auto">
                                  <div
                                    className="p-2  text-sm text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 max-w-max	"
                                    role="alert"
                                  >
                                    {errMgs.err_organization}
                                  </div>
                                </div>
                              )}
                          </div>

                          <div className="">
                            <Input
                              name={"name"}
                              placeholder={"Name"}
                              type="text"
                              onChange={(
                                event: ChangeEvent<HTMLInputElement>
                              ) => {
                                handleChange(event);
                              }}
                              onBlur={() => {
                                handleBlur;
                                setLoader(false);
                                setMsg("");
                                seterrStatus(0);
                              }}
                              value={values.name}
                            />
                            {errors.name && touched.name && (
                              <span className="text-red-400 font-medium">
                                {errors.name}
                              </span>
                            )}

                            {errStatus == 201 &&
                              errMgs.err_name &&
                              errMgs.err_name != "" && (
                                <div className="m-auto">
                                  <div
                                    className="p-2  text-sm text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 max-w-max	"
                                    role="alert"
                                  >
                                    {errMgs.err_name}
                                  </div>
                                </div>
                              )}
                          </div>
                        </div>
                        {/* first part */}

                        {/* second part */}

                        <div className="md:flex gap-4">
                          <div className="mt-4">
                            <Input
                              name={"email"}
                              placeholder={"Email"}
                              type="text"
                              onChange={(
                                event: ChangeEvent<HTMLInputElement>
                              ) => {
                                handleChange(event);
                              }}
                              onBlur={() => {
                                handleBlur;
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

                          <div className="mt-4">
                            <Input
                              name={"mobile"}
                              placeholder={"Mobile"}
                              type="text"
                              onChange={(
                                event: ChangeEvent<HTMLInputElement>
                              ) => {
                                handleChange(event);
                              }}
                              onBlur={() => {
                                handleBlur;
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
                          {/* second part */}
                        </div>

                        {/* third part */}

                        <div
                          className={`${
                            errors.country ? "w-[100%] mt-4" : "w-[100%] mt-4"
                          } `}
                        >
                          <Select
                            name="country"
                            label={"Select Country"}
                            contact={true}
                            options={corpPageResponse.enquryform.country_list}
                            value={values.country}
                            onChange={handleChange}
                            onBlur={() => {
                              handleBlur;
                              setErrmsg(ErrObj);
                              setLoader(false);
                            }}
                            errors={errors}
                          />
                          {errors.country && touched.country && (
                            <span className="text-red-400 font-medium">
                              {errors.country}
                            </span>
                          )}

                          {errStatus == 201 &&
                            errMgs.err_country &&
                            errMgs.err_country != "" && (
                              <div className="m-auto">
                                <div
                                  className="p-2  text-sm text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 max-w-max	"
                                  role="alert"
                                >
                                  {errMgs.err_country}
                                </div>
                              </div>
                            )}
                        </div>

                        <div className="mt-4">
                          <Input
                            name={"location"}
                            placeholder={"Location"}
                            type="text"
                            onChange={(
                              event: ChangeEvent<HTMLInputElement>
                            ) => {
                              handleChange(event);
                            }}
                            onBlur={() => {
                              handleBlur;
                              setLoader(false);
                              setMsg("");
                              seterrStatus(0);
                            }}
                            value={values.location}
                          />
                          {errors.location && touched.location && (
                            <span className="text-red-400 font-medium">
                              {errors.location}
                            </span>
                          )}

                          {errStatus == 201 &&
                            errMgs.err_location &&
                            errMgs.err_location != "" && (
                              <div className="m-auto">
                                <div
                                  className="p-2  text-sm text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 max-w-max	"
                                  role="alert"
                                >
                                  {errMgs.err_location}
                                </div>
                              </div>
                            )}
                        </div>

                        {/* third part */}
                        <div className="md:flex gap-4">
                          <div className="mt-4">
                            <Input
                              name={"participants"}
                              placeholder={"No of Participants"}
                              type="text"
                              onChange={(
                                event: ChangeEvent<HTMLInputElement>
                              ) => {
                                handleChange(event);
                              }}
                              onBlur={() => {
                                handleBlur;
                                setLoader(false);
                                setMsg("");
                                seterrStatus(0);
                              }}
                              value={values.participants}
                            />
                            {errors.participants && touched.participants && (
                              <span className="text-red-400 font-medium">
                                {errors.participants}
                              </span>
                            )}

                            {errStatus == 201 &&
                              errMgs.err_participants &&
                              errMgs.err_participants != "" && (
                                <div className="m-auto">
                                  <div
                                    className="p-2  text-sm text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 max-w-max	"
                                    role="alert"
                                  >
                                    {errMgs.err_participants}
                                  </div>
                                </div>
                              )}
                          </div>

                          <div className="mt-4">
                            <Input
                              name={"course"}
                              placeholder={"Training Program"}
                              type="text"
                              onChange={(
                                event: ChangeEvent<HTMLInputElement>
                              ) => {
                                handleChange(event);
                              }}
                              onBlur={() => {
                                handleBlur;
                                setLoader(false);
                                setMsg("");
                                seterrStatus(0);
                              }}
                              value={values.course}
                            />
                            {errors.course && touched.course && (
                              <span className="text-red-400 font-medium">
                                {errors.course}
                              </span>
                            )}

                            {errStatus == 201 &&
                              errMgs.err_course &&
                              errMgs.err_course != "" && (
                                <div className="m-auto">
                                  <div
                                    className="p-2  text-sm text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 max-w-max	"
                                    role="alert"
                                  >
                                    {errMgs.err_course}
                                  </div>
                                </div>
                              )}
                          </div>
                        </div>
                        <div
                          style={{
                            transform: "scale(0.85)",
                            transformOrigin: "0 0",
                          }}
                        >
                         <Captcha
                        CaptchaResponceFromParent={HandleCaptchaResponce}
                      />
                        </div>

                        <div className=" pt-1 block m-auto">
                          {Loader == true ? (
                            <div className="loader"></div>
                          ) : (
                            <button
                              type="button"
                              className="bg-[#f58634] text-white px-8 py-2 w-[100%] text-center"
                              onClick={() => {
                                handleSubmit();
                                const formValues = {
                                  ...values,
                                  adpage: adpage ?? "",
                                  adpage_id: ad ?? "",
                                  campaign: cm ?? "",
                                  captcha: captchaValues ?? "",
                                };
                              
                                {
                                  formValues.country !== "" &&
                                    formValues.course !== "" &&
                                    formValues.course !== " " &&
                                    !errors.course &&
                                    formValues.email !== "" &&
                                    formValues.email !== " " &&
                                    !errors.email &&
                                    formValues.location !== "" &&
                                    formValues.location !== " " &&
                                    !errors.location &&
                                    formValues.mobile !== "" &&
                                    formValues.mobile !== " " &&
                                    !errors.mobile &&
                                    formValues.name !== "" &&
                                    formValues.name !== " " &&
                                    !errors.name &&
                                    formValues.organization !== "" &&
                                    formValues.organization !== " " &&
                                    !errors.organization &&
                                    formValues.participants !== "" &&
                                    formValues.participants !== " " &&
                                    !errors.participants &&
                                    axios
                                      .post(
                                        "https://api-publicsite.caddcentre.com/api/syCorporateForm",
                                        formValues
                                      )
                                      .then(function (response: any) {
                                        setMsg(response.message);
                                        setSuccess(response.data.message);
                                        seterrStatus(response.status);
                                        setErrmsg(response.data);
                                      })
                                      .catch(function (error) {});
                                }
                                msg == "" &&
                                  formValues.country !== "" &&
                                  formValues.course !== "" &&
                                  formValues.course !== " " &&
                                  !errors.course &&
                                  formValues.email !== "" &&
                                  formValues.email !== " " &&
                                  !errors.email &&
                                  formValues.location !== "" &&
                                  formValues.location !== " " &&
                                  !errors.location &&
                                  formValues.mobile !== "" &&
                                  formValues.mobile !== " " &&
                                  !errors.mobile &&
                                  formValues.name !== "" &&
                                  formValues.name !== " " &&
                                  !errors.name &&
                                  formValues.organization !== "" &&
                                  formValues.organization !== " " &&
                                  !errors.organization &&
                                  formValues.participants !== "" &&
                                  formValues.participants !== " " &&
                                  !errors.participants &&
                                  setLoader(false);
                              }}
                            >
                              Submit
                            </button>
                          )}
                        </div>
                      </>
                    )}
                  </form>
                )}
              </Formik>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Form;
