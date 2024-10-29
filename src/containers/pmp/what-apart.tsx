import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface WhatApart {}

const WhatApart = () => {
        return (
            <>
                <div className='m-auto bg-[#052550] lg:p-10 p-5 md:py-14 py-10'>
                    <div className={ContainerWidth + ' lg:flex gap-10 text-white items-center justify-between'}>

                        <div className='text-2xl font-light'>What sets us apart?</div>

                        <div className='lg:mt-0 mt-10'>
                            <Image className='lg:w-[40px] w-[60px]' width="40" height="20" src="/assets/images/pmp/icons/top-three.png" alt='' title=''/>
                            <p className='font-bold lg:text-[16px] text-xl mt-3'>Top-rated resources</p>
                            <ul className='lg:text-xs text-sm font-normal list-disc ml-4 mt-2 leading-5'>
                                <li>250 hours of lecture videos</li>
                                <li>World-class reference books</li>
                                <li>8 mock tests</li>
                            </ul>
                        </div>

                        <div className='lg:mt-0 mt-10'>
                            <Image className='lg:w-[40px] w-[60px]' width="35" height="20" src="/assets/images/pmp/icons/training.png" alt='' title=''/>
                            <p className='font-bold lg:text-[16px] text-xl mt-3'>Going beyond training</p>
                            <ul className='lg:text-xs text-sm font-normal list-disc ml-4 mt-2 leading-5'>
                                <li>Workshops and seminars</li>
                                <li>Interactive sessions with industry experts</li>
                                <li>PMP aspirants support group</li>
                            </ul>
                        </div>

                        <div className='lg:mt-0 mt-10'>
                            <Image className='lg:w-[40px] w-[60px]' width="40" height="20" src="/assets/images/pmp/icons/bussnissman.png" alt='' title=''/>
                            <p className='font-bold lg:text-[16px] text-xl mt-3'>Expert trainers</p>
                            <ul className='lg:text-xs text-sm font-normal list-disc ml-4 mt-2 leading-5'>
                                <li>Dedicated mentor support</li>
                                <li>Panel of industry professionals</li>
                                <li>Expert trainers for each batch</li>
                            </ul>
                        </div>

                        
                        <div className='lg:mt-0 mt-10'>
                            <Image className='lg:w-[40px] w-[60px]' width="40" height="20" src="/assets/images/pmp/icons/online-training.png" alt='' title=''/>
                            <p className='font-bold md:text-[16px] text-xl mt-3'>Tech-intensive training platform</p>
                            <ul className='lg:text-xs text-sm font-normal list-disc ml-4 mt-2 leading-5'>
                                <li>Robust eLearning platform</li>
                                <li>Quizzes and online learning assessment</li>
                                <li>Live streaming and inventory of recorded lectures</li>
                            </ul>
                        </div>


                    </div>
                </div>
            </>
        );
}
export default WhatApart;