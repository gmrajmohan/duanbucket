import Image from "next/image";
import type { FC } from "react";
import { ContainerWidth } from "@/utils/width";

interface stripProps {}

const Strip: FC<stripProps> = ({}) => {
  const stripImage = [
    {
      id: 0,
      image: "/assets/strip-icon/pro01aa.jpg",
    },
    {
      id: 1,
      image: "/assets/strip-icon/pro02.jpg",
    },
    {
      id: 2,
      image: "/assets/strip-icon/pro01a.jpg",
    },
    {
      id: 3,
      image: "/assets/strip-icon/pro04.jpg",
    },
    // {
    //   id: 4,
    //   image: "/assets/strip-icon/pro03.jpg",
    // },
  ];
  return (
    <>
      <div className="py-5">
        <div className={ContainerWidth + " "}>
          <div className="lg:flex grid grid-cols-2 justify-between m-auto">
            {stripImage.map((values) => (
              <div className={`${values.id == 4 ? " col-span-2 m-auto mt-2" : "m-auto lg:mt-0 mt-2"}`}>
              <Image src={values.image} alt="img" width={150} height={100} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Strip;
