import { FooterTitle } from "@/containers/layout/interFace";

const FooterTitle = ({ title  } : FooterTitle) => {
    return (
        <div className="text-lg text-theme-red mb-[2px] text-white font-medium">{title}</div>
    );
};

export default FooterTitle;
