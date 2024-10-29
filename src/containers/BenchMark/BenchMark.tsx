import { useState, type FC, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { Form, Formik } from "formik";
import { CoursevalidationSchema } from "../CourseContainer/formikvalidation";
import Input from "@/components/input";
import Select from "@/components/select";
import GetStateList from "@/pages/api/state";
import GetStreamfunciton from "@/pages/api/stream";
import GetDistrict from "@/pages/api/distict";
import GetCenterListfun from "@/pages/api/center";
import GetCoursefunciton from "@/pages/api/course";
import { Oval } from "react-loader-spinner";
import { Button } from "@material-tailwind/react";
import Captcha from "../home/Captcha";
import { useRouter } from "next/router";

interface CourseEnqFromProps {}

interface centreInterface {
  centreCode: number;
  centreName: string;
}
[];

const BenchEnqFrom: FC<CourseEnqFromProps> = ({}) => {
  const [errMgs, seterrMgs] = useState<any>(""); // response err
  const [Loader, setLoader] = useState(false);
  const [msg, setMsg] = useState("");
  const [errStatus, seterrStatus] = useState(201);
  const [Profile, setProfile] = useState([]);

  const [State, setState] = useState([]);
  const [StateId, GetStateId] = useState<string>();
  const [district, setDistrict] = useState([]);
  const [DistictId, getDistictId] = useState<string>();
  const [centre, GetCenterList] = useState([]);
  const [Success, setSuccess] = useState("");

  const [Stream, setStream] = useState();
  const [StreamId, GetStreamId] = useState<string>();
  const [CourseList, setCourseList] = useState<any>([]);
  const [captchaValues, setcaptchaValues] = useState<boolean>();
  const [Clicked, setClciked] = useState(false);
  const [HideFrom, setHideFrom] = useState(false);

  useEffect(() => {
    const State = process.env.NEXT_PUBLIC_COMMEN__STATE_API;
    GetStateList(`${State}`, setState);
  }, []);

  useEffect(() => {
    if (StateId !== undefined && StateId !== "") {
      const district = process.env.NEXT_PUBLIC_COMMEN__DISTRICT_API;
      GetDistrict(`${district}`, setDistrict, StateId);
    }
  }, [StateId]);

  useEffect(() => {
    GetStreamfunciton(
      `https://api-publicsite.caddcentre.com/api/streamList/3`,
      setStream
    );
  }, []);

  useEffect(() => {
    if (StreamId) {
      GetCoursefunciton(
        `https://api-publicsite.caddcentre.com/api/streamWithcourseList/${StreamId}`,
        setCourseList
      );
    }
  }, [StreamId]);

  useEffect(() => {
    if (DistictId !== undefined) {
      const centre = process.env.NEXT_PUBLIC_COMMEN__CENTRE_API;
      GetCenterListfun(`${centre}`, GetCenterList, DistictId);
    }
  }, [DistictId]);

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

  const HandleCaptchaResponce = (data: any) => {
    setcaptchaValues(data);
  };

  const router = useRouter();
  const { adpage } = router.query;
  const { ad } = router.query; //getting adpage id from url
  const { cm } = router.query; //getting campain name from url

  const profile_array = [
    {
      id: 1,
      name: "Student (1st, 2nd, 3rd year)",
    },
    {
      id: 2,
      name: "Student - Final year",
    },
    {
      id: 3,
      name: "Graduate, Job seeker",
    },
    {
      id: 4,
      name: "Working Professional",
    },
  ];

  const handleSelectChange = (event: any, formicChange: any) => {
    formicChange(event);
  };

  const HandleSubmitClick = () => {
    setClciked(true);
  };

  useEffect(() => {
    if (errStatus == 200) {
      setHideFrom(true);
    }
  }, [errStatus]);

  return (
    <>
      <div className="mb-1 lg:p-8 p-4 bg-[#052550] lg:mt-14 mt-10 m-auto lg:w-[75%]">
        <Formik
          initialValues={{
            name: "",
            mobile: "",
            email: "",
            profile: "",
            state: "",
            city: "",
            centre: "",
            stream_id: "",
            course_id: "",
          }}
          validationSchema={CoursevalidationSchema}
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
            <>
              {Success && Success != "" && errStatus == 200 && (
                <div className="grid grid-cols-1 gap-y-1 mt-4 ">
                  <div
                    className="p-2  text-sm text-center text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800 max-w-max	"
                    role="alert"
                  >
                    {Success}
                  </div>
                </div>
              )}

              {HideFrom == false && (
                <>
                  <div className="font-medium text-3xl text-white">
                    Benckmark: Login
                  </div>
                  <div className="text-white">
                    Evaluate your preparedness for Project Management
                    Professional (PMP)® exam
                  </div>
                  <a
                    target="_blank"
                    href="https://mock.synergysbs.com/index.php"
                  >
                    <Button className="bg-[#f58533] rounded lg:mt-8 mt-6 font-medium lg:text-[15px]">
                      Login
                    </Button>
                  </a>
                  {/* <div className="mt-5">
                    <div>
                      <Input
                        name={"name"}
                        placeholder={"User Name*"}
                        type="text"
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
                    <div
                      className={`${errors.mobile ? " mt-4" : " mt-4"} `}
                    ></div>

                    <div
                      className={`${
                        errors.centre ? "w-[100%] mt-4" : "w-[100%] mt-4"
                      } `}
                    >
                      <Input
                        name={"name"}
                        placeholder={"Password*"}
                        type="text"
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
                      {errors.centre && touched.centre && (
                        <span className="text-red-400 font-medium">
                          {errors.centre}
                        </span>
                      )}
                    </div>

                    {errStatus == 201 &&
                      errMgs.err_centre &&
                      errMgs.err_centre != "" && (
                        <div className="m-auto">
                          <div
                            className="p-2  text-sm text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 max-w-max	"
                            role="alert"
                          >
                            {errMgs.err_centre}{" "}
                          </div>
                        </div>
                      )}
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
                    <div className="m-auto ">
                      {values.name !== "" &&
                      values.name !== " " &&
                      !errors.name &&
                      values.mobile !== "" &&
                      values.mobile !== " " &&
                      !errors.mobile &&
                      values.email !== "" &&
                      values.email !== " " &&
                      !errors.email &&
                      values.state.length !== 0 &&
                      values.state !== "" &&
                      values.state !== "" &&
                      values.city.length !== 0 &&
                      values.city !== "" &&
                      values.city !== "" &&
                      values.centre.length !== 0 &&
                      values.centre !== "" &&
                      values.centre !== "" &&
                      errStatus == 0 &&
                      Clicked == true ? (
                        <Oval
                          ariaLabel="loading-indicator"
                          height={20}
                          width={80}
                          strokeWidth={5}
                          strokeWidthSecondary={5}
                          color="#f58634"
                          secondaryColor="white"
                          wrapperClass="flex mt-4"
                        />
                      ) : (
                        <Button
                          type="button"
                          className="bg-[#f58634] text-white text-center py-3 px-10 rounded font-medium text-[14px]"
                          onClick={() => {
                            handleSubmit();

                            const formValues = {
                              ...values,
                              adpage_id: ad ?? "",
                              campaign: cm ?? "",
                              adpage: adpage ?? "",
                              captcha: captchaValues ?? "",
                              stream_id: 11,
                              course_id: 10,
                            };

                            {
                              formValues.name !== "" &&
                                formValues.name !== " " &&
                                formValues.mobile !== "" &&
                                formValues.mobile !== " " &&
                                formValues.email !== "" &&
                                formValues.email !== " " &&
                                formValues.state.length !== 0 &&
                                formValues.state !== "" &&
                                formValues.state !== "" &&
                                formValues.city.length !== 0 &&
                                formValues.city !== "" &&
                                formValues.city !== "" &&
                                formValues.centre.length !== 0 &&
                                formValues.centre !== "" &&
                                formValues.centre !== "" &&
                                axios
                                  .post(
                                    "https://api-publicsite.caddcentre.com/api/syCourseForm/",
                                    formValues
                                  )
                                  .then(function (response: any) {
                                    setMsg(response.data.message);
                                    seterrStatus(response.status);
                                    setSuccess(response.data.message);

                                    seterrMgs(response.data);
                                  })
                                  .catch(function (error) {});
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
                                formValues.state.length !== 0 &&
                                formValues.state !== "" &&
                                formValues.state !== "" &&
                                formValues.city.length !== 0 &&
                                formValues.city !== "" &&
                                formValues.city !== "" &&
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
                  </div> */}
                </>
              )}
            </>
          )}
        </Formik>
      </div>
    </>
  );
};
export default BenchEnqFrom;
