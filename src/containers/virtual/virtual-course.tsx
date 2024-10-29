import Image from "next/image";
import H2 from "@/components/Typograph/h2";
import { TypoFontVariant } from "@/components/Typograph/fonts";
import ButtonForRandom from "./buttonforandom";

const VirtualCourse = ({centreDetails,RandomCenterDetails ,LocationSlugWithInt}:any) =>{
return (
    <>
        <div className="lg:max-w-7xl m-auto md:py-12 py-8">
            <H2 type={TypoFontVariant.barlow_semi_consbold} content="Contact us" className="inline-block text-[#000] text-center text-3xl justify-center flex font-bold underline decoration-2 decoration-pink-600 underline-offset-[9px]"/>

            <div className="bg-[#ED1164] md:p-10 p-6 mt-10">
                <div className="grid md:grid-cols-2 grid-cols-1 flex items-center"> 
                    <div className=""> 
                        <h3 className="text-white text-2xl barlow_semi_conssemibold">Synergy<br/>{centreDetails && centreDetails && centreDetails.map((values : any)=>(
                            values.centre_name
                        ))}</h3>
                        {/* <StarRating/> */}     
                        <div className="flex gap-5 cabinet_regular items-center text-white mt-5">
                            {/* <Image width={20} height={20} alt="Location" title="Location" src="/assets/images/virtualpage/icons/location.png"/> */}
                            <p className="w-[80%]">{centreDetails && centreDetails && centreDetails.map((values : any)=>(
                            values.centre_address
                        ))}</p>
                        </div>
                        <div className="flex gap-5 cabinet_regular items-center text-white mt-5">
                            {/* <Image width={20} height={20} alt="Location" title="Location" src="/assets/images/virtualpage/icons/mail.png"/> */}
                            <p className="">{centreDetails && centreDetails && centreDetails.map((values : any)=>(
                            values.centre_email_id
                        ))}</p>
                        </div>
                        <div className="flex gap-5 cabinet_regular items-center text-white mt-5">
                            {/* <Image width={20} height={20} alt="Location" title="Location" src="/assets/images/virtualpage/icons/phone.png"/> */}
                            <p className="">{centreDetails && centreDetails && centreDetails.map((values : any)=>(
                            values.centre_contact_no
                        ))}</p>
                        </div>
                    </div>
                    {/* <div className="md:mt-0 mt-5">
                        <Image width={600} height={300} alt="Location" title="Location" src="/assets/images/virtualpage/mapsicle-map.jpg"/>
                    </div> */}
                </div>
            </div>
        </div>
        <H2 type={TypoFontVariant.barlow_semi_consbold} content="Available location" className="inline-block text-[#000] text-center text-3xl justify-center flex font-bold underline decoration-2 decoration-pink-600 underline-offset-[9px]"/>
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-4 mt-6"> 
        <div className="m-auto flex flex-wrap justify-center items-center gap-2 mt-6">
          {RandomCenterDetails &&
            RandomCenterDetails.map((values: any) => (
              <ButtonForRandom  ranurl={values.centre_name
              } name={values.state_name} className="p-2 px-6 bg-[#ED1164] hover:bg-gray-300 rounded shadow-md text-white hover:text-black  cabinet_regular"
              LocationSlugWithInt={LocationSlugWithInt}
              
              />
            ))}
        </div>
        </div>
    </>
)
}
export default VirtualCourse;
