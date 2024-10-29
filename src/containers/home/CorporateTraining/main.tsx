
import type { FC } from "react";
import CorporateTrainingConotent from "./Content";
import CompanyLogoCarousel from "./CompanyLogoCarousel";
import NetWorkBlogEvent from "../NetWorkBlogEvent/main";
interface CorporateTrainingProps {}

const CorporateTraining: FC<CorporateTrainingProps> = ({}) => {
  return (
    <>
      <CorporateTrainingConotent/>
      <CompanyLogoCarousel/>
      {/* <NetWorkBlogEvent/> */}
    </>
  );
};
export default CorporateTraining;
