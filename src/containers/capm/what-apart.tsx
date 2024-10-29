import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface WhatApart {}

const WhatApart = () => {
        return (
            <>
                <div className='m-auto bg-[#052550] lg:p-10 p-5 md:py-14 py-10'>
                    <div className={ContainerWidth + ' lg:flex text-white items-center justify-between gap-2'}>

                        <div className='lg:w-[20%] w-[100%]'>
                        <div className='text-xl font-light'>What sets us apart?</div>
                        </div>

                        <div className='lg:w-[80%] w-[100%] text-white items-center gap-10 flex-wrap grid lg:grid-cols-4 grid-cols-2'>
                        <div className='lg:mt-0 mt-10'>
                            <Image className='lg:w-[40px] w-[60px]' width="40" height="20" src="/assets/images/capm/icons/premium.png" alt='' title=''/>
                            <p className='font-medium lg:text-[15px] text-xl mt-3 leading-5'>Premium<br/>Resources</p>
                        </div>

                        <div className='lg:mt-0 mt-10'>
                            <Image className='lg:w-[40px] w-[60px]' width="35" height="20" src="/assets/images/capm/icons/world-class.png" alt='' title=''/>
                            <p className='font-medium lg:text-[15px] text-xl mt-3 leading-5'>World-Class<br/>Reference Materials</p>
                        </div>

                        <div className='lg:mt-0 mt-10'>
                            <Image className='lg:w-[40px] w-[60px]' width="40" height="20" src="/assets/images/capm/icons/unlimited.png" alt='' title=''/>
                            <p className='font-medium lg:text-[15px] text-xl mt-3 leading-5'>Unlimited<br/>Mock Tests</p>
                        </div>

                        
                        <div className='lg:mt-0 mt-10'>
                            <Image className='lg:w-[40px] w-[60px]' width="40" height="20" src="/assets/images/capm/icons/engaging.png" alt='' title=''/>
                            <p className='font-medium md:text-[15px] text-xl mt-3 leading-5'>Engaging<br/>Workshops and Seminars</p>
                        </div>


                        <div className='lg:mt-0 mt-10'>
                            <Image className='lg:w-[40px] w-[60px]' width="40" height="20" src="/assets/images/capm/icons/interactive.png" alt='' title=''/>
                            <p className='font-medium md:text-[14px] text-xl mt-3 leading-5'>Interactive Sessions<br/>with Industry Experts</p>
                        </div>

                        <div className='lg:mt-0 mt-10'>
                            <Image className='lg:w-[40px] w-[60px]' width="40" height="20" src="/assets/images/capm/icons/comprehensive.png" alt='' title=''/>
                            <p className='font-medium md:text-[14px] text-xl mt-3 leading-5'>Comprehensive<br/>eLearning Platform</p>
                        </div>


                        <div className='lg:mt-0 mt-10'>
                            <Image className='lg:w-[40px] w-[60px]' width="40" height="20" src="/assets/images/capm/icons/online.png" alt='' title=''/>
                            <p className='font-medium md:text-[14px] text-xl mt-3 leading-5'>Quizzes and Online<br/>Learning Assessments</p>
                        </div>



                        </div>


                    </div>
                </div>
            </>
        );
}
export default WhatApart;