import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';
import CertificationContext from '@/Context/Certification';
import { Button } from '@material-tailwind/react';
import { useContext } from 'react';

interface BannerSec {}

const BannerSec = () => {
const {scrollToRef,handleScroll} = useContext(CertificationContext)
    
        return (
            <>
                <div className='lg:w-[100%] bg-[#17354a]'>
                    <Image className='lg:relative m-auto' width="1920" height="539" src="/assets/images/scrum/scrum-banner.jpg" alt='Course' title='Course'/>
                    <div className={ContainerWidth + ' bg-[#17354a] lg:h-auto h-[180px]'}>
                        <div className='absolute left-[100] lg:mt-[-300px] text-white'>
                        <h1 className='lg:text-3xl text-2xl lg:w-[70%] mt-5 !leading-[45px]'>Cracking the Scrum Preparatory Exam with Agile Precision</h1>
                        <Button className='w-[130px] block text-center text-white p-3 rounded-sm bg-[#f58634] text-sm mt-5' onClick={()=>handleScroll(scrollToRef)}>Apply Now</Button>
                        </div>
                    </div>
                </div>
            </>
        );
}
export default BannerSec;