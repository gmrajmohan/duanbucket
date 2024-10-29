
import { ReactNode } from "react";
import { TypoFontVariant } from "./fonts"
interface PType {
    className : string;
    type : string;
    content :string;
    element? : ReactNode
}
const P=({className,type,content}:PType)=>{
    const classNames =TypoFontVariant[type] + " " + className
return (
    <>
    <p className={classNames}>
       <span dangerouslySetInnerHTML={{ __html: content }}>
        </span>
    </p>
    <style jsx>
    {`
     .streampara
     {
       font-size: 15px;
       font-family: cabinet_groteskregular;
       line-height: 20px;
       padding-top: 10px;
     }
    `}
    </style>
    </>
)
}
export default P 