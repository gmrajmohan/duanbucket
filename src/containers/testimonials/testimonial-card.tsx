import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface TestimonialsCard {}

const TestimonialsCard = () => {
        return (
            <>
                <div className={ContainerWidth + " py-10"}>


                <h1 className='font-normal text-center lg:text-3xl text-2xl text-[#134364]'>Project Management</h1>


                <div className='grid lg:grid-cols-3 grid-cols-1 gap-20 content-between'>

                    <div className='border-2 px-6 py-6 shadow-sm rounded-2xl mt-12'>
                        <Image className='relative mt-[-40px]' width="50" height="50" src="/assets/images/testimonials/rquotes.svg" alt='' title=''/>
                        <p className='text-[16px] font-medium leading-8 mt-5 lg:min-h-[330px]'><span className='text-3xl text-[#134364] font-bold'>J</span>oining Synergy School of Business for Primavera and Project Planning was a life-changing decision. The cooperative faculty provided a professional yet friendly learning environment that fueled my knowledge quest. Excellent teaching, frequent evaluations, and consistent feedback enhanced my skills and knowledge in project management. </p>
                        <div className='flex gap-5 mt-5 items-center mb-3'>
                            <Image width="70" height="70" src="/assets/images/testimonials/profile/ibrahim.png" alt='' title=''/>
                            <div className='text-lg text-[#134364] font-semibold'>Ibrahim <span className='font-light block text-[#000] text-sm'>Synergy - Madurai</span></div>
                        </div>
                        <Image className='relative mb-[-50px] right-[10px] float-right' width="50" height="50" src="/assets/images/testimonials/lquotes.svg" alt='' title=''/>
                    </div>


                    <div className='border-2 px-6 py-6 shadow-sm rounded-2xl mt-12'>
                        <Image className='relative mt-[-40px]' width="50" height="50" src="/assets/images/testimonials/rquotes.svg" alt='' title=''/>
                        <p className='text-[16px] font-medium leading-8 mt-5 lg:min-h-[330px]'><span className='text-3xl text-[#134364] font-bold'>A</span>fter completing B.Tech in Civil Engineering, I joined Synergy School of Business Skills, Madurai to get professional training in Project Management and Planning. I am glad that I chose Synergy as my training partner, as the institute not only provided me with technical training but also enhanced my interpersonal skills. These skills helped me get the job of an Estimation Engineer in a leading construction company.</p>
                        <div className='flex gap-5 mt-5 items-center mb-3'>
                            <Image width="70" height="70" src="/assets/images/testimonials/profile/shubham.png" alt='' title=''/>
                            <div className='text-lg text-[#134364] font-semibold'>Shubham Sawant <span className='font-light block text-[#000] text-sm'> Synergy - Madurai</span></div>
                        </div>
                        <Image className='relative mb-[-50px] right-[10px] float-right' width="50" height="50" src="/assets/images/testimonials/lquotes.svg" alt='' title=''/>
                    </div>


                    <div className='border-2 px-6 py-6 shadow-sm rounded-2xl mt-12'>
                        <Image className='relative mt-[-40px]' width="50" height="50" src="/assets/images/testimonials/rquotes.svg" alt='' title=''/>
                        <p className='text-[16px] font-medium leading-8 mt-5 lg:min-h-[330px]'><span className='text-3xl text-[#134364] font-bold'>C</span>ourse of "Master Diploma in Project Planning and Management" at Synergy add special skills to new the graduates who are to enter the corporate world. I could sense the enthusiasm among the trainers and ability to teach students with practical examples is worthy. I would like to thank Synergy to set a strong foundation in beginning of my career.</p>
                        <div className='flex gap-5 mt-5 items-center mb-3'>
                            <Image width="70" height="70" src="/assets/images/testimonials/profile/nawaz.png" alt='' title=''/>
                            <div className='text-lg text-[#134364] font-semibold'>Nawaz Khan <span className='font-light block text-[#000] text-sm'>Master Diploma in Project Planning and Management</span></div>
                        </div>
                        <Image className='relative mb-[-50px] right-[10px] float-right' width="50" height="50" src="/assets/images/testimonials/lquotes.svg" alt='' title=''/>
                    </div>


                    <div className='border-2 px-6 py-6 shadow-sm rounded-2xl mt-12'>
                        <Image className='relative mt-[-40px]' width="50" height="50" src="/assets/images/testimonials/rquotes.svg" alt='' title=''/>
                        <p className='text-[16px] font-medium leading-8 mt-5 lg:min-h-[275px]'><span className='text-3xl text-[#134364] font-bold'>A</span>s a fresher in Project Management, the course at Synergy introduced me to the concepts and software in the field. The training staff, cooperative and knowledgeable, clarified doubts with real-time examples. This course has been instrumental in helping me learn and master my Project Management Skills.</p>
                        <div className='flex gap-5 mt-5 items-center mb-3'>
                            <Image width="70" height="70" src="/assets/images/testimonials/profile/mohammed.png" alt='' title=''/>
                            <div className='text-lg text-[#134364] font-semibold'>Mohammed Shafith <span className='font-light block text-[#000] text-sm'>Jayanagar, Bangalore</span></div>
                        </div>
                        <Image className='relative mb-[-50px] right-[10px] float-right' width="50" height="50" src="/assets/images/testimonials/lquotes.svg" alt='' title=''/>
                    </div>


                    <div className='border-2 px-6 py-6 shadow-sm rounded-2xl mt-12'>
                        <Image className='relative mt-[-40px]' width="50" height="50" src="/assets/images/testimonials/rquotes.svg" alt='' title=''/>
                        <p className='text-[16px] font-medium leading-8 mt-5 lg:min-h-[275px]'><span className='text-3xl text-[#134364] font-bold'>S</span>ynergy offers an extremely healthy environment for students to learn management skills and its related software. The institute helps candidates to acquire valuable knowledge and understanding about project management concepts through powerful course material and highly supportive staff.</p>
                        <div className='flex gap-5 mt-5 items-center mb-3'>
                            <Image width="70" height="70" src="/assets/images/testimonials/profile/saidinesh.png" alt='' title=''/>
                            <div className='text-lg text-[#134364] font-semibold'>Sai Dinesh <span className='font-light block text-[#000] text-sm'>Jayanagar, Bangalore</span></div>
                        </div>
                        <Image className='relative mb-[-50px] right-[10px] float-right' width="50" height="50" src="/assets/images/testimonials/lquotes.svg" alt='' title=''/>
                    </div>



                </div>


                    <h1 className='font-normal text-center lg:text-3xl text-2xl text-[#134364] lg:mt-32'>Tally</h1>

                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-20 flex justify-center'>


                        <div className='border-2 px-6 py-6 shadow-sm rounded-2xl mt-12'>
                            <Image className='relative mt-[-40px]' width="50" height="50" src="/assets/images/testimonials/rquotes.svg" alt='' title=''/>
                            <p className='text-[15px] font-medium leading-6 mt-5 lg:min-h-[330px]'><span className='text-3xl text-[#134364] font-bold'>I</span> joined Tally complete course in Synergy School of Business in the month of April 2019. From the day one i have got confidence that i was in the right place. The staff assigned here are appreciable. He has taken the classes in an easy and understandable way, each and everything explained with clear examples. I learn many shortcuts available in Tally course like GST, Payroll, Sales and purchase invoices. The institute staffs are very supportive for my future growth. I convey my sincere thanks to all the staffs for being supportive in completing the course.</p>
                            <div className='flex gap-5 mt-5 items-center mb-3'>
                                <Image width="70" height="70" src="/assets/images/testimonials/profile/rathiga.png" alt='' title=''/>
                                <div className='text-lg text-[#134364] font-semibold'>Mrs. Rathiga <span className='font-light block text-[#000] text-sm'>Synergy - Andalpuram Madurai Centre.</span></div>
                            </div>
                            <Image className='relative mb-[-50px] right-[10px] float-right' width="50" height="50" src="/assets/images/testimonials/lquotes.svg" alt='' title=''/>
                        </div>


                        <div className='border-2 px-6 py-6 shadow-sm rounded-2xl mt-12'>
                            <Image className='relative mt-[-40px]' width="50" height="50" src="/assets/images/testimonials/rquotes.svg" alt='' title=''/>
                            <p className='text-[15px] font-medium leading-6 mt-5 lg:min-h-[330px]'><span className='text-3xl text-[#134364] font-bold'>I</span> am currently pursuing B.Com. I attended a seminar in Synergy, through which i joined the Tally ERP course in Synergy School of Business, Madurai. The staffs there trained me well and due to the individual training it was easy for me to clarify doubts and to understand better. Synergy has also helped me secure a part time job in Tally during my study. Thanks to Synergy and the staffs for helping me in my growth.</p>
                            <div className='flex gap-5 mt-5 items-center mb-3'>
                                <Image width="70" height="70" src="/assets/images/testimonials/profile/santhosh.png" alt='' title=''/>
                                <div className='text-lg text-[#134364] font-semibold'>R. Santhosh <span className='font-light block text-[#000] text-sm'>Synergy - Andalpuram Madurai centre</span></div>
                            </div>
                            <Image className='relative mb-[-50px] right-[10px] float-right' width="50" height="50" src="/assets/images/testimonials/lquotes.svg" alt='' title=''/>
                        </div>



                    </div>


                    <h1 className='font-normal text-center lg:text-3xl text-2xl text-[#134364] lg:mt-28'>Digital Marketing</h1>

                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-20 flex justify-center'>


                        <div className='border-2 px-6 py-6 shadow-sm rounded-2xl mt-12'>
                            <Image className='relative mt-[-40px]' width="50" height="50" src="/assets/images/testimonials/rquotes.svg" alt='' title=''/>
                            <p className='text-[15px] font-medium leading-6 mt-5 lg:min-h-[230px]'><span className='text-3xl text-[#134364] font-bold'>R</span> ecently completing my Digital Marketing diploma at Synergy School was an amazing experience. Initially unfamiliar with Digital Marketing, I gained comprehensive knowledge through the experienced faculty, who provided theoretical and practical insights with real-life examples.</p>
                            <div className='flex gap-5 mt-5 items-center mb-3'>
                                <Image width="70" height="70" src="/assets/images/testimonials/profile/ashok.png" alt='' title=''/>
                                <div className='text-lg text-[#134364] font-semibold'>Ashok <span className='font-light block text-[#000] text-sm'>Synergy - Andalpuram Madurai.</span></div>
                            </div>
                            <Image className='relative mb-[-50px] right-[10px] float-right' width="50" height="50" src="/assets/images/testimonials/lquotes.svg" alt='' title=''/>
                        </div>


                        <div className='border-2 px-6 py-6 shadow-sm rounded-2xl mt-12'>
                            <Image className='relative mt-[-40px]' width="50" height="50" src="/assets/images/testimonials/rquotes.svg" alt='' title=''/>
                            <p className='text-[15px] font-medium leading-6 mt-5 lg:min-h-[230px]'><span className='text-3xl text-[#134364] font-bold'>I</span> am very glad to be a part of this Institution. When i was in the final year during one seminar i came to know about Synergy School of Business, soon after my graduation i joined this institute for studying Digital Marketing. The teaching methodology is simple and good. The teachers here are friendly and very supportive because of them we get to update our knowledge day to day.</p>
                            <div className='flex gap-5 mt-5 items-center mb-3'>
                                <Image width="70" height="70" src="/assets/images/testimonials/profile/swetha.png" alt='' title=''/>
                                <div className='text-lg text-[#134364] font-semibold'>S. Swetha <span className='font-light block text-[#000] text-sm'>Synergy - Andalpuram Madurai centre</span></div>
                            </div>
                            <Image className='relative mb-[-50px] right-[10px] float-right' width="50" height="50" src="/assets/images/testimonials/lquotes.svg" alt='' title=''/>
                        </div>



                    </div>






                </div>
            </>
        );
}
export default TestimonialsCard;