import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';
import { useContext } from 'react';
import CourseContext from '@/Context/Course';
import { Button } from '@material-tailwind/react';


interface ApplyNowCRP {}

const ApplyNowCRP = () => {

  const {scrollToRef,handleScroll} = useContext(CourseContext)

        return (
            <>
                <div className="bg-[#052550]">
                    <div className={ContainerWidth + " lg:py-12 py-10"}>

                        <p className='text-orange-600 lg:text-3xl text-2xl text-center'>Apply Now for Corporate Training</p>
                        <p className='text-white text-center lg:w-[60%] m-auto mt-3  mb-6 font-light'>Invest in your employees career growth with our customized corporate training solutions. Explore how Lead Training and Corporate Solutions can drive your company to excellence.</p>
                        <Button className='block text-center p-3 rounded-sm font-medium  text-white mt-8 bg-[#f58634] m-auto'  onClick={()=>handleScroll(scrollToRef)}>Apply Now</Button>


                    </div>
                </div>

            </>
        );
}
export default ApplyNowCRP;