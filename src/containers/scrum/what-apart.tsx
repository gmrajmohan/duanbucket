import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface WhatApart {}

const WhatApart = () => {
        return (
            <>
                <div className='m-auto bg-[#052550] lg:p-10 p-5 md:py-14 py-10'>
                    <div className={ContainerWidth + ' lg:flex text-white items-center justify-between gap-2'}>

                        <div className='text-xl font-light'>What sets us apart?</div>

                        <div className='lg:mt-0 mt-10'>
                            <Image className='lg:w-[40px] w-[60px]' width="40" height="20" src="/assets/images/scrum/icons/top-three.png" alt='' title=''/>
                            <p className='font-bold lg:text-[13px] text-xl mt-3 leading-4'>Top-rated resources</p>
                            <ul className='lg:text-xs text-sm font-normal list-disc ml-4 mt-2 leading-5'>
                                <li>180 days access to 150 hours of training videos</li>
                                <li>World-class Scrum study materials</li>
                                <li>Unlimited mock tests</li>
                            </ul>
                        </div>

                        <div className='lg:mt-0 mt-10'>
                            <Image className='lg:w-[40px] w-[60px]' width="35" height="20" src="/assets/images/scrum/icons/training.png" alt='' title=''/>
                            <p className='font-bold lg:text-[13px] text-xl mt-3 leading-4'>Going beyond training</p>
                            <ul className='lg:text-xs text-sm font-normal list-disc ml-4 mt-2 leading-5'>
                                <li>Workshops and seminars</li>
                                <li>Interactive sessions with industry experts</li>
                                <li>Scrum aspirants support group</li>
                            </ul>
                        </div>

                        <div className='lg:mt-0 mt-10'>
                            <Image className='lg:w-[40px] w-[60px]' width="40" height="20" src="/assets/images/scrum/icons/bussnissman.png" alt='' title=''/>
                            <p className='font-bold lg:text-[13px] text-xl mt-3 leading-4'>Committed and expert trainers</p>
                            <ul className='lg:text-xs text-sm font-light list-disc ml-4 mt-2 leading-6'>
                                <li>Dedicated mentor support</li>
                                <li>Panel of industry professionals</li>
                                <li>Expert trainers for each batch</li>
                            </ul>
                        </div>

                        
                        <div className='lg:mt-0 mt-10'>
                            <Image className='lg:w-[40px] w-[60px]' width="40" height="20" src="/assets/images/scrum/icons/online-training.png" alt='' title=''/>
                            <p className='font-bold md:text-[14px] text-xl mt-3 leading-4'>Tech-intensive training platform</p>
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