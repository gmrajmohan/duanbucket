import Link from "next/link";
import { TopBarLinks } from "@/utils/links";
import { ContainerWidth } from "@/utils/width";
import Image from "next/image";

const TopBar = () => {
  const getContainerClass = (values : any) => {
    return values.id === 5 || values.id === 6 ? "flex gap-2 items-center" : "";
  };

  const getContainerBgClass = (values : any) => {
    if (values.id === 5) return "bg-[#006EB7] hover:bg-[#008ce9]";
    if (values.id === 6) return "bg-[#F48632] hover:bg-[#f79e5a]";
    return "";
  };

  const getImageWidth = (values: any) => {
    return values.id === 5 ? 32 : 18;
  };

  const TargetBlank = (values : any) =>{
    return values.target === true ? "_blank" : ""
  }

  const renderTopBarLink = (values : any) => (
    <div key={values.id} className={`px-[10px] py-2 ${getContainerClass(values)} ${getContainerBgClass(values)}`}>
      {values.imgUrl && <Image src={values.imgUrl} width={getImageWidth(values)} height={30} alt="image" />}
      <Link className="topbar text-white" href={values.href} target={TargetBlank(values)}>
        {values.title}
      </Link>
    </div>
  );

  return (
    <div className="bg-[#1B252F]">
      <div className={`hidden md:flex py-2 text-black justify-end text-[13px] font-medium ${ContainerWidth} m-auto px-10`}>
        <div className="flex gap-3 items-center">
          {TopBarLinks.map(renderTopBarLink)}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
