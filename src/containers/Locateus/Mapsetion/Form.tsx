import Select from "@/components/select";
import GetLocateusCenterList from "@/pages/api/locateus/center";
import GetLocateusDistrict from "@/pages/api/locateus/ditrict";
import GetLocateusStateList from "@/pages/api/locateus/state";
import GetLocateusCenterDetails from "@/pages/api/locateus/centreDetails";
import { Formik } from "formik";
import { ChangeEvent, useEffect, useState } from "react";

interface centreInterface {
  centreCode: number;
  centreName: string;
}
[];

type HandleCentreDetailsType = () => void;

export default function Form({HandleCentreDetails} :any) {
  const [States, setState] = useState<any>("");
  const [ProperStateList, setProperStateList] = useState([]);
  const [StateId, GetStateId] = useState<string>();
  const [district, setDistrict] = useState([]);

  const [DistictId, getDistictId] = useState<string>("27");
  const [centre, GetCenterList] = useState([]);
  const [centerCode, setcenterCode] = useState("91STN101");
  const [centreDetails, setcentreDetails] = useState();


  useEffect(() => {
    const State = process.env.NEXT_PUBLIC_COMMEN__STATE_API;
    GetLocateusStateList(`${State}`, setState);
  }, []);

  useEffect(() => {
    States && setProperStateList(States);
  }, [States]);

  useEffect(() => {
    if (StateId !== undefined && StateId !== "") {
      const district = process.env.NEXT_PUBLIC_COMMEN__DISTRICT_API;
      GetLocateusDistrict(`${district}`, setDistrict, StateId);
    }
  }, [StateId]);

  useEffect(() => {
    if (DistictId !== undefined) {
      const centre = process.env.NEXT_PUBLIC_COMMEN__CENTRE_API;
      GetLocateusCenterList(`${centre}`, GetCenterList, DistictId);
    }
  }, [DistictId]);

  useEffect(() => {
    if (centerCode !== undefined) {
      const centre = process.env.NEXT_PUBLIC_COMMEN__CENTREDETAILS_API;
      GetLocateusCenterDetails(
        `${centre}`,
        setcentreDetails,
        DistictId,
        centerCode
      );
    }
  }, [DistictId,centerCode]);

  const handleSelectChange = (event: any, formicChange: any) => {
    formicChange(event);
  };

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

    useEffect(()=>{
      HandleCentreDetails(centreDetails)
    },[centreDetails])


  return (
    <div className=" bg-[#1A3F59] lg:w-[35%]  ">
      <Formik
        initialValues={{
          state: "",
          district: "",
          centre: "",
        }}
        validationSchema={""}
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
            <>
              <div className="px-6 py-9">
                <h2 className="text-[30px] text-center text-white font-medium">
                  Choose Location
                </h2>

                <div className="mt-2">
                  <p className="text-white mb-1">Country</p>
                  <input
                    type="text"
                    className=" block h-10 px-2 py-0 border border-theme-gray-100 bg-white shadow-sm focus:outline-none focus:ring-theme-red focus:border-theme-red sm:text-sm w-full"
                    placeholder="India"
                    readOnly
                  />
                  <p className="text-white mb-1 mt-4">State</p>
                  <Select
                    name="state"
                    label={"Select State"}
                    options={ProperStateList}
                    onBlur={(event: any) => {
                      handleBlur;
                    }}
                    contact={true}
                    onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                      handleSelectChange(event, handleChange);
                      GetStateId(event.target.value);
                    }}
                    errors={errors}
                  />

                  <p className="text-white mb-1 mt-4">City</p>
                  <Select
                    name="district"
                    label={"Select District"}
                    options={district}
                    value={values.district}
                    onBlur={(event: any) => {
                      handleBlur;
                    }}
                    contact={true}
                    onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                      handleSelectChange(event, handleChange);
                      getDistictId(event.target.value);
                    }}
                    errors={errors}
                  />

                  <p className="text-white mb-1 mt-4">Centres</p>

                  <Select
                    name="centre"
                    contact={true}
                    label={"Select Centre"}
                    options={Cents}
                    value={values.centre}
                    onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                      handleSelectChange(event, handleChange);
                      setcenterCode(event.target.value);
                    }}
                    errors={errors}
                  />
                </div>
              </div>
            </>
          </>
        )}
      </Formik>
    </div>
  );
}
