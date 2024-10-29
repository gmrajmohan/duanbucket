import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';
import { useContext } from 'react';
import CertificationContext from '@/Context/Certification';
interface Journey {}

const Journey = () => {
const {scrollToRef,handleScroll} = useContext(CertificationContext)

        return (
            <>
                <div className='bg-[#052550] m-auto lg:py-14 py-10'>
                    <div className={ContainerWidth + ' '}>

                        <h4 className='font-bold text-center text-white text-2xl'><span className='font-light'>Join us today to</span> start your journey towards a prosperous project management career!</h4>
                        <button className='m-auto mt-4 bg-[#006AB0] p-3 text-white block px-6 rounded-sm' onClick={()=>handleScroll(scrollToRef)}>Apply Now</button>

                    </div>
                </div>
            </>
        );
}
export default Journey;