import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface Elgibility {}

const Elgibility = () => {
        return (
            <>
                <div className='m-auto lg:py-0 mb-20 md:mt-0 mt-12'>
                    <div className={ContainerWidth + ' '}>

                        <div className="grid lg:grid-cols-2 my-4 justify-center m-auto gap-12 lg:mt-8 mt-10 lg:w-[95%]">
                            
                            {/* 1 */}
                            <div className="text-center flex lg:gap-10 gap-5 lg:border-r-2 border-gray-300">
                                <div className=''><Image className='lg:w-[60px] w-[60px]' width="60" height="60" src="/assets/images/capm/icons/cert.png" alt='' title=''/></div>
                                <div className='text-left'>
                                    <p className='font-bold text-[#114466] lg:w-[70%] w-[100%] text-lg leading-6'>A Must-to-Enroll Program for:</p>
                                    <ul className='text-[#114466] text-sm font-medium mt-2 list-disc ml-4 leading-6'>
                                        <li>Aspiring Project Managers</li>
                                        <li>Eligible Candidates</li>
                                    </ul>
                                </div>
                            </div>
                            {/* 1 */}


                            {/* 2 */}
                            <div className="text-center flex lg:gap-10 gap-5">
                                <div className=''><Image className='lg:w-[60px] w-[80px]' width="60" height="50" src="/assets/images/capm/icons/degree.png" alt='' title=''/></div>
                                <div className='text-left'>
                                    <p className='font-bold text-[#114466] lg:w-[70%] w-[100%] text-lg leading-6'>Eligibility Criteria</p>
                                    <ul className='text-[#114466] text-sm font-medium mt-2 list-disc ml-4 leading-6'>
                                        <li>A secondary degree (high school diploma or the global equivalent)</li>
                                        <li>At least 1,500 hours of project experience or 23 hours of project management education by the time you sit for the exam</li>
                                    </ul>
                                </div>
                            </div>
                            {/* 2 */}


                        </div>


                    </div>
                </div>
            </>
        );
}
export default Elgibility;