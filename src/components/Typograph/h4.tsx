
import { TypoFontVariant } from "./fonts"

interface H3Type {
    className : string,
    type : string,
    content :string
}

const H4=({className,type,content}:H3Type)=>{
    const classNames =TypoFontVariant[type] + " "+ className
return (
    
    <>
    <h2 className={classNames}>
        {content}
    </h2>
    </>
)
}
export default H4