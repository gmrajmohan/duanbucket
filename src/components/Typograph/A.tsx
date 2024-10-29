
import { TypoFontVariant } from "./fonts"

interface AType {
    className : string,
    type : string,
    content :string,
    href? : string
}

const A=({className,type,content,href}:AType)=>{
    const classNames =TypoFontVariant[type] + " "+ className
return (
    
    <>
    <a className={classNames} href={href}>
        {content}
    </a>
    </>
)
}
export default A 