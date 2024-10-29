import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface BannerSec {}

const BannerSec = () => {
        return (
            <>
                <div className='lg:w-[100%] bg-[#236d9f]'>
                    <Image className='lg:relative m-auto' width="1920" height="539" src="/assets/images/corporate/corporate-banner.jpg" alt='Course' title='Course'/>
                    <div className={ContainerWidth + ' bg-[#17354a] lg:h-auto h-[180px] items-center'}>
                        <div className='absolute left-[100] lg:mt-[-180px] text-white'>
                            <h1 className='lg:text-4xl text-2xl text-[#F58634] font-bold mt-5'>Synergy’s Customised Training Solutions</h1>
                            <p className='text-2xl mt-3'>Empowering Workforce and Institutions for Excellence</p>
                        </div>
                    </div>
                </div>
            </>
        );
}
export default BannerSec;