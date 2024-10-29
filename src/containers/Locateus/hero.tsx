import { ContainerWidth } from "@/utils/width";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import type { FC } from "react";
import { useContext } from "react";

interface LocateInterface {

}
const Hero: FC<LocateInterface> = () => {
 

  return (
    <>
      <div className="lg:w-[100%] bg-[#17354a] relative">
        <Image
          className="lg:relative m-auto lg:block hidden"
          width="1920"
          height="539"
          src={"/assets/locateus/banner.jpg"}
          alt={"locatus"}
          title="Course"
        />
      </div>
    </>
  );
};
export default Hero;
