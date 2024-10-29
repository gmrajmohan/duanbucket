
import H2 from "@/components/Typograph/h2";

import { TypoFontVariant } from "@/components/Typograph/fonts";

const VirtualBanner = (centre : any) =>{

return (
    <>
        <div className="md:max-w-full bg-[url('https://marketing.caddcentre.com/uploads/banners/1703849534_Group-52315.jpg')] bg-cover bg-center bg-no-repeat; md:py-10 p-5">
            <div className="lg:max-w-7xl m-auto py-12">
                {/* <H2 type={TypoFontVariant.barlow_semi_condensedbold} content={"DreamZone" + centre &&  centre.centre && centre.centre.map((val : any)=> " -  " + val.centre_name)} className="inline-block text-[#  303030] text-3xl text-white font-bold"/> */}
                <h2 className=" inline-block text-[#  303030] text-3xl text-white font-bold">Synergy {centre &&  centre.centre && centre.centre.map((val : any)=> " -  " + val.centre_name)}</h2>
                {/* <div className="mt-5"><StarRating/></div> */}
                <p className="text-white text-5xl barlow_semi_condensedbold font-bold md:leading-[60px] mt-5">Guinness World Record Holder:<br/>VIBES 360°</p>
            </div>
        </div>
    </>
)
}
export default VirtualBanner;
