
import { TypoFontVariant } from "./fonts"

interface H1Type {
    className : string,
    type : string,
    content :string
}

const H2=({className,type,content}:H1Type)=>{
    const classNames =TypoFontVariant[type] + " "+ className
return (
    
    <>
    <h2 className={classNames}>
        {content}
    </h2>
    </>
)
}
export default H2