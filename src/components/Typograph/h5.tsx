
import { TypoFontVariant } from "./fonts"

interface H5Type {
    className : string,
    type : string,
    content :any
}

const H5=({className,type,content}:H5Type)=>{
    const classNames =TypoFontVariant[type] + " "+ className
return (
    
    <>
    <h2 className={classNames}>
        {content}
    </h2>
    </>
)
}
export default H5