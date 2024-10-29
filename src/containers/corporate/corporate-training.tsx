import Image from "next/image";
import { ContainerWidth } from "@/utils/width";
import TrainingIcon from "./training-icons";

interface CorpTraining {}

const CorpTraining = () => {
  return (
    <>
      <div className={ " lg:py-10"}>
        <div className="lg:flex justify-between gap-x-20 items-center">
          <div className="lg:w-[100%] w-[100%]">
            <h2 className="text-[#114466] text-3xl font-normal">
              Corporate Training
            </h2>
            <p className="text-[#114466] mt-5 font-normal text-md">
              In the corporate world, adaptability and innovation are paramount.
              With Synergy's School of Business Skills, you can invest in the
              growth and success of your organisation. Our corporate training
              programs are tailored to meet the unique needs of your business,
              helping you stay competitive and relevant in the ever-evolving
              business landscape.
            </p>
          </div>
        </div>

        
      </div>
    </>
  );
};
export default CorpTraining;
