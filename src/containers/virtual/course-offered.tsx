import Image from "next/image";
import H2 from "@/components/Typograph/h2";
import {IoIosArrowForward} from "react-icons/io"
import Link from "next/link";
import { TypoFontVariant } from "@/components/Typograph/fonts";


const CourseOffered = ({centre,slug,LocationSlugWithInt} : any) =>{

const Search = slug && slug.replace(/[, ]/g, "-");

return (
    <>
        <div className="lg:max-w-7xl m-auto md:py-12 p-5">
            <H2 type={TypoFontVariant.barlow_semi_consbold} content="Courses Offered" className="inline-block text-[#000] text-center text-3xl justify-center flex font-bold underline decoration-2 decoration-pink-600 underline-offset-[9px]"/>
            <p className="text-center cabinet_regular mt-5">Our courses prepare you for successful careers in your chosen creative field.</p>

            <div className="grid md:grid-cols-4 grid-cols-1 gap-5 text-[13px] cabinet_regular">

                <div className="shadow-md mt-10">
                    <Image width={400} height={300} src="/assets/images/virtualpage/stream/fashion.jpg" alt="Fashion" title="Fashion" />
                    <div className="p-5">
                        <h2 className="barlow_semi_conssemibold text-[#3D3E92] text-xl leading-6">Fashion Design<br/>Course</h2>
                        <p className="mt-2 md:h-[100px] leading-5 font-bold">Unlock your creativity and technical expertise to develop fashion illustrations with unique designs that leave a lasting impression.</p>
                        {/* https://www.dreamzone.co.in/location-course/fashion-design-course+Pune-Swargate/ */}
                        <Link href={`${LocationSlugWithInt==1?"/location-course/":"/virtual_course/?stream="}fashion-design-course_${slug}`} className="block rounded-lg max-w-[125px] mt-4 bg-[#3D3E92] gap-1 justify-between items-center flex text-center text-white text-md px-4 p-2 barlow_semi_conssemibold">View Program <IoIosArrowForward/> </Link>
                    </div>
                </div>


                <div className="shadow-md mt-10">
                    <Image width={400} height={300} src="/assets/images/virtualpage/stream/interior.jpg" alt="Fashion" title="Fashion" />
                    <div className="p-5">
                        <h2 className="barlow_semi_conssemibold text-[#31A759] text-xl leading-6">Interior Design<br/>Course</h2>
                        <p className="mt-2 md:h-[100px] leading-5 font-bold">Immerse yourself in the art of preparing sophisticated designs for a variety of spaces, including homes, hotels, offices, hospitals, and environmental settings.</p>
                        <Link href={`${LocationSlugWithInt==1?"/location-course/":"/virtual_course/?stream="}interior-design-course_${slug}`} className="block rounded-lg max-w-[125px] mt-4 bg-[#31A759] gap-1 justify-between items-center flex text-center text-white text-md px-4 p-2 barlow_semi_conssemibold">View Program <IoIosArrowForward/> </Link>
                    </div>
                </div>

                <div className="shadow-md mt-10">
                    <Image width={400} height={300} src="/assets/images/virtualpage/stream/graphics.jpg" alt="Fashion" title="Fashion" />
                    <div className="p-5">
                        <h2 className="barlow_semi_conssemibold text-[#F69931] text-xl leading-6">Web & Graphic Design<br/>Course</h2>
                        <p className="mt-2 md:h-[100px] leading-5 font-bold">Dive into the world of graphics design, web design, 2D & 3D modeling, animation, and post-production operations, gaining essential knowledge of the latest tools and technologies.</p>
                        {/* <a className="block rounded-lg max-w-[125px] mt-4 bg-[#F69931] gap-1 justify-between items-center flex text-center text-white text-md px-4 p-2 barlow_semi_conssemibold" href="#">View Program <IoIosArrowForward/></a> */}
                        <Link href={`${LocationSlugWithInt==1?"/location-course/":"/virtual_course/?stream="}graphic-design-course_${slug}`} className="block rounded-lg max-w-[125px] mt-4 bg-[#F69931] gap-1 justify-between items-center flex text-center text-white text-md px-4 p-2 barlow_semi_conssemibold">View Program <IoIosArrowForward/> </Link>
                    </div>
                </div>

                <div className="shadow-md mt-10">
                    <Image width={400} height={300} src="/assets/images/virtualpage/stream/jewellery.jpg" alt="Fashion" title="Fashion" />
                    <div className="p-5">
                        <h2 className="barlow_semi_conssemibold text-[#E21B63] text-xl leading-6">Jewellery Design<br/>Course</h2>
                        <p className="mt-2 md:h-[100px] leading-5 font-bold">Acquire the skills of drafting, sketching, shading, and illustrating forms and shapes, and embark on an exciting journey in the realm of jewellery design.</p>
                       
                        <Link href={`${LocationSlugWithInt==1?"/location-course/":"/virtual_course/?stream="}jewellery-design-course_${slug}`}  className="block rounded-lg max-w-[125px] mt-4 bg-[#E21B63] gap-1 justify-between items-center flex text-center text-white text-md px-4 p-2 barlow_semi_conssemibold">View Program <IoIosArrowForward/> </Link>
                    </div>
                </div>


            </div>


        </div>
    </>
)
}
export default CourseOffered;
