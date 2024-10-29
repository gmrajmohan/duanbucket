import React,{ComponentProps} from "react"
import Link from "next/link"
import { AddHyphen } from "@/utils/functions/addhyphen";

type RandomButtonType = ComponentProps<"button"> & {
    className : string
    ranurl : string
    name : string   
    LocationSlugWithInt : undefined | number
}
const ButtonForRandom = ({...props} : RandomButtonType) =>{
   const url =  props.ranurl

   return (
    <Link 
    className={props.className} 
    href={props.LocationSlugWithInt == 1 ? "/location/"+url : "/virtual/?search="+url }> 
    <button>{props.name}</button>
    </Link>)
}
export default ButtonForRandom