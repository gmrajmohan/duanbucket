import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import Input from "@/components/input";
import ContactusCustomTextArea from "./ContactusCustomTextArea";
import { Oval } from "react-loader-spinner";
import { useRouter } from "next/router";
import { Button } from "@material-tailwind/react";
import Heading from "@/components/Heading";
import Image from "next/image";
import { ContainerWidth } from "@/utils/width";
import Captcha from "../home/Captcha";

const validationSchema = yup.object({
  name: yup
    .string()
    .trim("The Name cannot include leading spaces")
    .strict(true)
    .required("Name is required"),
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
  remarks: yup
    .string()
    .trim("The Name cannot include leading spaces")
    .strict(true)
    .required("Message is required"),
});

const GeneralContactForm = () => {
  const [Message, getMessage] = useState<string>();
  const [Clicked, setClciked] = useState(false);
  const [Msg, setMsg] = useState("");
  const [errStatus, seterrStatus] = useState<number>();
  const [errMsg, setErrmsg] = useState<any>(""); // response err

  const [errMgs, seterrMgs] = useState<any>();
  const [Success, setSuccess] = useState<any>("");

  const [Loader, setLoader] = useState(false);

  const [captchaValues, setcaptchaValues] = useState<boolean>();

  const rout = useRouter();
  const path = rout.asPath;
  const router = useRouter();
  const { adpage } = router.query;
  const { adpage_id } = router.query; //getting adpage id from url
  const { campaign } = router.query; //getting campain name from url

  const HandleSubmitClick = () => {
    setClciked(true);
  };

  const HandleCaptchaResponce = (data: any) => {
    setcaptchaValues(data);
  };

  useEffect(() => {
    setClciked(false);
  }, [Msg]);

  return (
    <>
      <Heading
        type={22}
        content="We would love to connect with you! 
        Reach out to us for more information."
      />
      <div className={`${ContainerWidth} lg:flex justify-center m-auto gap-10`}>
        <div className="m-auto lg:w-[65%] lg:h-[550px]">
          <Image
            src={"/assets/locateus/MapsicleMap.jpg"}
            width={800}
            height={200}
            alt="map"
            className="md:h-[506px] mt-6"
          />
        </div>
        <div className="m-auto lg:px-10 px-6 mt-6 border bg-[#1A3F59] py-4 lg:w-[34%]">
        {Msg !== "" && errStatus == 200 && (
          <p className="text-center text-green-400 text-xl font-semibold">
            {Msg}
          </p>
        )}

          <Heading type={21} content="Let’s Get in Touch" />
          <Formik
            initialValues={{
              name: "",
              mobile: "",
              email: "",
              remarks: "",
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
                <div className="mt-4 mb-4">
                  <Input
                    name={"name"}
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

                <div className="mb-4">
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

                <div className="">
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
                  <ContactusCustomTextArea
                    placHolder="Message"
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                      getMessage(event.target.value);
                    }}
                    value={values.remarks}
                    onBlur={handleBlur}
                  />
                  {errMgs && errMgs.err_remarks && (
                    <p className="flex justify-center text-red-500  text-sm ">
                      {errMgs && errMgs.err_remarks}
                    </p>
                  )}
                </div>
                <div>
                <Captcha
                        CaptchaResponceFromParent={HandleCaptchaResponce}
                      />
                </div>
                <div className="mt-4"></div>
                {errMgs && errMgs.err_captcha && (
                  <p className="flex text-red-500  text-sm">
                    {errMgs && errMgs.err_captcha}
                  </p>
                )}

                <div className="flex justify-center">
                  {values.name !== "" &&
                  values.name !== " " &&
                  !errors.name &&
                  values.mobile !== "" &&
                  values.mobile !== " " &&
                  !errors.mobile &&
                  values.email !== "" &&
                  values.email !== " " &&
                  !errors.email &&
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
                      className=" bg-[#F58634] text-white  text-[14px] font-medium  rounded mt-4 px-6 py-2"
                      onClick={(event) => {
                        handleSubmit();
                        const formValues = {
                          ...values,
                          remarks: Message,
                          captcha: captchaValues ?? "",

                        };
                        {
                          formValues.name !== "" &&
                            !errors.name &&
                            formValues.mobile !== "" &&
                            !errors.mobile &&
                            formValues.email !== "" &&
                            !errors.email &&
                            axios
                              .post(
                                // 'https://campaign.caddcentre.com/api/?key=asbdb2384aheuh283ynbJBJnsW8IG5&req_data=ContactForm',
                                "https://api-publicsite.caddcentre.com/api/syGeneralForm",
                                formValues
                              )
                              .then(function (response: any) {
                                setMsg(response.data.message);
                                setSuccess(response.data.message);
                                seterrStatus(response.status);
                                setErrmsg(response.data);
                                if (response.status == 200) {
                                  (values.name = ""),
                                    (values.mobile = ""),
                                    (values.email = ""),
                                    () => getMessage("");
                                }
                              })
                              .catch(function (error) {
                                console.log(error);
                              });
                        }
                        {
                          formValues.name !== "" &&
                            formValues.name !== " " &&
                            !errors.name &&
                            formValues.mobile !== "" &&
                            formValues.mobile !== " " &&
                            !errors.mobile &&
                            formValues.email !== "" &&
                            formValues.email !== " " &&
                            !errors.email &&
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
      </div>
    </>
  );
};
export default GeneralContactForm;
