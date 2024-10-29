import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface InfoGraphic {}

const InfoGraphic = () => {
        return (
            <>
                <div className={ContainerWidth + " py-5"}>
                    <Image className='m-auto md:block hidden' width={1520} height={622} src="/assets/images/about/info-graphic.png" alt='Info' title='Info'/>

                    <div className='md:hidden block'>
                        <Image className='m-auto block md:hidden' width={1520} height={622} src="/assets/images/about/info-graphic-tp.png" alt='Info' title='Info'/>

   
                        <div className='flex gap-5 mt-10'>
                            <Image className='m-auto block md:hidden w-[20%]' width={100} height={100} src="/assets/images/about/icons/project-management.png" alt='Info' title='Info'/>
                            <p className='text-xl font-bold text-[#0082D2] w-[80%]'>Project Management<span className='font-light text-[#000]  block text-[18px] leading-6'>Empowering leaders to master projects of any scale.</span></p>
                        </div>

                        <div className='flex gap-5 items-center mt-10'>
                            <Image className='m-auto block md:hidden w-[20%]' width={100} height={100} src="/assets/images/about/icons/work-management.png" alt='Info' title='Info'/>
                            <p className='text-xl font-bold text-[#39C1CD] w-[80%]'>Work Management Solutions<span className='font-light text-[#000]  block text-[18px] leading-7'>Collaborate seamlessly from idea to execution.</span></p>
                        </div>

                        <div className='flex gap-5 items-center mt-10'>
                            <Image className='m-auto block md:hidden w-[20%]' width={120} height={120} src="/assets/images/about/icons/office-automation.png" alt='Info' title='Info'/>
                            <p className='text-xl font-bold text-[#8CD26E] w-[80%]'>Office Automation<span className='font-light text-[#000]  block text-[18px] leading-7'>Elevate workplace productivity with essential automation skills.</span></p>
                        </div>


                        <div className='flex gap-5 items-center mt-10'>
                            <Image className='m-auto block md:hidden w-[20%]' width={100} height={100} src="/assets/images/about/icons/taxation.png" alt='Info' title='Info'/>
                            <p className='text-xl font-bold text-[#F58220] w-[80%]'>Business Accounting & Taxation<span className='font-light text-[#000]  block text-[18px] leading-7'>Navigate the financial world adeptly.</span></p>
                        </div>


                        <div className='flex gap-5 items-center mt-10'>
                            <Image className='m-auto block md:hidden w-[20%]' width={120} height={120} src="/assets/images/about/icons/digital-marketing.png" alt='Info' title='Info'/>
                            <p className='text-xl font-bold text-[#ED1C24] w-[80%]'>Digital Marketing & Career Skills<span className='font-light text-[#000]  block text-[18px] leading-7'>Master online marketing and essential soft skills for success.</span></p>
                        </div>


                    </div>


                </div>
            </>
        );
}
export default InfoGraphic;