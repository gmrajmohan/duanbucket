import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface BannerSec {}

const BannerSec = () => {
        return (
            <>
                <div className='lg:w-[100%] bg-[#17354a]'>
                    <Image className='lg:relative m-auto' width="1920" height="539" src="/assets/images/about/banner.jpg" alt='Course' title='Course'/>
                    <div className={ContainerWidth + ' bg-[#17354a] lg:h-auto h-[180px] items-center'}>
                        <div className='absolute left-[100] lg:mt-[-250px] text-white'>
                            <h1 className='lg:text-[40px] font-normal text-xl text-[#F58634] mt-5'>Unveiling Synergy</h1>
                            <p className='text-2xl mt-4'>A Journey of Excellence</p>
                        </div>
                    </div>
                </div>
            </>
        );
}
export default BannerSec;