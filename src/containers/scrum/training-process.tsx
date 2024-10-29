import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface TrainingProcess {}

const TrainingProcess = () => {
        return (
            <>
                <div className='m-auto bg-[#fff] py-10 md:mt-14 mt-0'>
                    <div className={ContainerWidth + ' lg:flex gap-10 text-white items-center justify-between'}>

                        <div className='m-auto md:block hidden'>
                            <p className='absolute ml-[-50px] mt-[40px] z-10 text-[#114466] text-sm font-medium leading-5 text-right'><span className='block font-bold text-lg'>Learn</span>Participate in classroom<br/>sessions and projects to<br/>master the core concepts.</p>
                            <p className='absolute ml-[250px] mt-[-80px] z-10 text-[#114466] text-sm font-medium leading-5 text-center'><span className='block font-bold text-lg'>Fail Fast</span>Recognize learning gaps through mock tests<br/>and learning assessments.</p>
                            <Image className='relative' width="750" height="300" src="/assets/images/scrum/scrum-training.png" alt='' title=''/>
                            <p className='absolute ml-[-230px] mt-[-140px] z-10 text-[#114466] text-sm font-medium leading-5 text-right'><span className='block font-bold text-lg'>Know</span>Understand your current<br/>position in your PMP preparation<br/>journey and
identify your next steps.</p>
                            <p className='absolute ml-[770px] mt-[-140px] z-10 text-[#114466] text-sm font-medium leading-5 text-left'><span className='block font-bold text-lg'>Appear</span>Receive support until you appear<br/>for the exam via your preferred<br/>communication channels.</p>
                            <p className='absolute ml-[650px] mt-[-300px] z-10 text-[#114466] text-sm  ont-medium leading-5 text-left'><span className='block font-bold text-lg'>Strengthen</span>Clarify doubts and strengthen<br/>your understanding with<br/>exclusive one-on-one sessions.</p>
                        </div>


                        {/* mobile version */}
                        <div className='block md:hidden'>
                            <Image className='m-auto' width={396} height={100} src="/assets/images/pmp/pmp-training-mb.png" alt='PMP Training' title='PMP Training'/>
                            
                            <div className='flex gap-5 justify-center items-center mt-8'>
                                <Image width="100" height="100" src="/assets/images/pmp/pmp-icons/know.svg" alt='Know' title='Know'/>
                                <div className='text-sm text-black'><span className='text-lg font-bold text-[#052450] block'>Know</span> Understand your current position in your PMP preparation journey and identify your next steps.</div>
                            </div>

                            <div className='flex gap-5 justify-center items-center mt-8'>
                                <Image width="100" height="100" src="/assets/images/pmp/pmp-icons/learn.svg" alt='Know' title='Know'/>
                                <div className='text-sm text-black'><span className='text-lg font-bold text-[#052450] block'>Learn</span> Participate in classroom sessions and projects to master the core concepts.</div>
                            </div>

                            <div className='flex gap-5 justify-center items-center mt-8'>
                                <Image width="100" height="100" src="/assets/images/pmp/pmp-icons/fail-fast.svg" alt='Know' title='Know'/>
                                <div className='text-sm text-black'><span className='text-lg font-bold text-[#052450] block'>Fail Fast</span> Recognise learning gaps through mock tests and learning assessments.</div>
                            </div>

                            <div className='flex gap-5 justify-center items-center mt-8'>
                                <Image width="100" height="100" src="/assets/images/pmp/pmp-icons/strength.svg" alt='Know' title='Know'/>
                                <div className='text-sm text-black'><span className='text-lg font-bold text-[#052450] block'>Strengthen</span> Clarify doubts and strengthen your understanding with exclusive one-on-one sessions.</div>
                            </div>

                            <div className='flex gap-5 justify-center items-center mt-8'>
                                <Image width="100" height="100" src="/assets/images/pmp/pmp-icons/fail-fast.svg" alt='Know' title='Know'/>
                                <div className='text-sm text-black'><span className='text-lg font-bold text-[#052450] block'>Appear</span> Receive support until you appear for the exam via your preferred communication channels.</div>
                            </div>



                        </div>
                        {/* mobile version */}


                    </div>
                </div>
            </>
        );
}
export default TrainingProcess;