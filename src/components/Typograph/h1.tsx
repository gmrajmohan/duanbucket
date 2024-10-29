
import { TypoFontVariant } from "./fonts"

interface H1Type {
    className : string,
    type : string,
    content :string
}

const H1=({className,type,content}:H1Type)=>{
    const classNames =TypoFontVariant[type] + " "+ className
return (
    
    <>
    <h1 className={classNames}>
        {content}
    </h1>
    </>
)
}
export default H1 