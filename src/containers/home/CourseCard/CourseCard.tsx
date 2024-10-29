import { useContext, type FC, useState } from "react";
import { CourseCardSource } from "@/utils/responses";
import { CourseCardContext } from "./Context";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({}) => {
  const [isReady, setIsReady] = useState(false);
  const onLoadCallback = () => {
      setIsReady(true);
  };
  const { Clicked } = useContext(CourseCardContext);


  return (
    <>
      <div className="md:grid md:grid-cols-3 flex justify-between gap-x-20 gap-y-12 mt-16">
        {CourseCardSource.map(
          (values: any) =>
            Clicked == values.id && (
              <>
                {values.course.map((val: any) => (
                  <div
                    key={val.id}
                    className="m-auto md:w-[320px] mb-10  courseCardBoxShadow rounded"
                  >
                    <Image
                      src={val.thump_nail}
                      width={350}
                      height={200}
                      alt={val.title}
                      className={`bg-gray-400 transition md:rounded-t-lg  duration-1000 w-[100%]  ${isReady ? 'scale-100 bg-gray-400 blur-0' : 'scale-120 blur-xl '
                      }`}
                      onLoad={onLoadCallback}
                      priority
                    />

                    <div className=" px-4 pt-5 pb-1">
                      <div className="min-h-[50px]">
                      <Link className="text-[20px] font-bold text-[#114466] leading-[22px] " href={"courses/"+val.slug}>
                        {val.title}
                      </Link>
                      </div>
                      <p className="text-[15px] leading-[20px] mt-2 text-gray-700 min-h-[40px]" >
                        {val.content}
                      </p>
                      <p className="text-[17px] text-gray-900 font-semibold mt-3">
                        Duration: {val.duration}
                      </p>
                      <ul className="text-[15px]">
                        {val.spacial.map((i: any, index: any) => (
                          <li key={index}> + {i}</li>
                        ))}
                      </ul>
                     
                      <div className="flex justify-between items-center mt-3 mb-2">

                      <Link className="bg-[#f58634] text-white font-normal text-xs text-center p-3 px-4 hover:bg-orange-900 rounded-md" href={"courses/"+val.slug}>VIEW COURSE</Link>

                      <div className={`flex justify-end ${  Clicked ==1  ?  "mb-0" :  "mb-4" }`}>
                        {
                        Clicked ==1 &&
                        <Image
                          src={"/assets/strip-icon/pro01a.jpg"}
                          width={120}
                          alt="pmi"
                          height={40}
                        />
                      }
                      </div>
                      </div>
                    
                      
                    </div>
                  </div>
                ))}
              </>
            )
        )}
      </div>
    </>
  );
};
export default CourseCard;
