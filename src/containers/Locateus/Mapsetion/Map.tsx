import Image from "next/image";
import React from "react";
import { PiArrowElbowUpRightBold } from "react-icons/pi";
const Map = (CentreDetails: any) => {
  return (
    <div className=" bg-[url('/assets/locateus/MapsicleMap.jpg')] bg-no-repeat bg-cover m-auto lg:px-24 lg:py-24  lg:w-[65%] lg:mb-0 mb-10">
      <div className="bg-white p-8">
        {CentreDetails.CentreDetails &&
          CentreDetails.CentreDetails.map((values: any) => (
            <>
              <div className="flex items-center gap-4 ">
                <Image
                  src={"/assets/locateus/location icon.jpg"}
                  width={20}
                  height={20}
                  alt="point"
                />
                <p className="text-[22px] font-semibold text-[#1A3F59]">
                  {values.centreName}
                </p>
              </div>
              {values.centreAddress && (
                <p className="text-[18px] mt-4 text-base">
                  {values.centreAddress}
                </p>
              )}
              {values.centreEmail && (
                <p className="text-[18px] mt-4 text-base ">
                  Email : {values.centreEmail}
                </p>
              )}

              {values.CentreContact && (
                <p className="text-[18px] mt-4 text-base">
                  {" "}
                  Mobile : {values.CentreContact}
                </p>
              )}

              {values.Latitude != null && values.Longitude != null && (
                <>
                  <button className="bg-[#1A3F59] text-white flex items-center gap-4 px-4 py-2 mt-4">
                    <Image
                      src={"/assets/locateus/arrow.svg"}
                      width={20}
                      height={30}
                      alt="arrow"
                    />

                    <a
                      href={`https://www.google.com/maps/place/@${values.Latitude},${values.Longitude}/?entry=ttu`}
                      target="_blank"
                    >
                      Get Direction
                    </a>
                  </button>
                </>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default Map;
