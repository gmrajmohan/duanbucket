import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface Vital {}

const Vital = () => {
        return (
            <>
                <div className='bg-[#fff] m-auto lg:py-32'>
                    <div className={ContainerWidth + ' lg:flex gap-10'}>

                        {/* left section */}
                        <div className='lg:w-[40%]'>
                            <Image width="450" height="200" src="/assets/images/pmp/vital-vector.png" alt='' title=''/>
                            <p className='text-2xl mt-5 text-[#114466] font-light'>Our PMP certification training</p>
                            <p className='text-[#f58634] text-2xl font-bold'>guarantees your exposure to<br/>three vital elements:</p>
                        </div>
                        {/* left section */}
                        
                        
                        {/* right section */}
                        <div className='text-[#114466] m-auto lg:max-w-[400px] max-w-[150px] leading-5 lg:w-[50%] lg:my-6 my-20 md:block hidden'>
                            <p className='absolute lg:ml-[30px] ml-[0px] z-10 mt-[-60px] font-bold lg:text-[17px] leading-6 text-xs mt-[-80px]'>Structured Learning: <span className='block font-normal !text-md font-medium'>Cover all exam topics comprehensively<br/>through our structured curriculum.</span></p>
                            <Image className='relative' width="300" height="200" src="/assets/images/pmp/essential-vector.png" alt='' title=''/>
                            <p className='absolute lg:mt-[-70px] mt-[-25px] leading-6 lg:ml-[-150px] ml-[-100px] font-bold lg:text-[17px]'>Practice Exams: <span className='block font-normal text-md mt-1 font-medium'>Gain familiarity with the<br/>test environment through<br/>practice exams that mimic<br/>the actual format.</span></p>
                            <p className='absolute mt-[-130px] lg:ml-[320px] ml-[160px] font-bold lg:text-[17px] leading-6 text-xs'>Expert Guidance: <span className='block font-normal font-medium'>Benefit from trainers with<br/>PMP expertise who clarify<br/>doubts, provide insights, and<br/>share strategies for effective<br/>exam preparation.</span></p>
                        </div>
                        {/* right section */}


                        {/* mobile version */}
                        <div className='block md:hidden'>
                            
                            <div className='flex gap-5 justify-center items-center mt-8'>
                                <Image width="90" height="100" src="/assets/images/pmp/pmp-icons/practice.svg" alt='Know' title='Know'/>
                                <div className='text-sm text-black'><span className='text-lg font-bold text-[#052450] block'>Practice Exams</span> Gain familiarity with the test environment through practice exams that mimic the actual format</div>
                            </div>

                            <div className='flex gap-5 justify-center items-center mt-8'>
                                <Image width="90" height="100" src="/assets/images/pmp/pmp-icons/structured.svg" alt='Know' title='Know'/>
                                <div className='text-sm text-black'><span className='text-lg font-bold text-[#052450] block'>Structured Learning</span> Cover all exam topics comprehensively through our structured curriculum</div>
                            </div>

                            <div className='flex gap-5 justify-center items-center mt-8'>
                                <Image width="90" height="100" src="/assets/images/pmp/pmp-icons/expert.svg" alt='Know' title='Know'/>
                                <div className='text-sm text-black'><span className='text-lg font-bold text-[#052450] block'>Expert Guidance</span> Benefit from trainers with Scrum expertise who clarify doubts, provide insights, and share strategies for effective exam preparation</div>
                            </div>



                        </div>
                        {/* mobile version */}
                        

                    </div>
                </div>
            </>
        );
}
export default Vital;