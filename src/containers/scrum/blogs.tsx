import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface Blogs {}

const Blogs = () => {
        return (
            <>
                <div className='bg-[#fff] m-auto lg:py-14'>
                    <div className={ContainerWidth + ' '}>

                        <h3 className='text-[#0990bb] text-center lg:text-3xl text-xl font-bold'>Network / Blog / Events</h3>
                        <p className='text-center mt-4'>Develop A Cutting Edge WorkforceMeet your organizational training needs and excel in today’s competitive environment</p>


                        <div className='lg:flex gap-5 justify-between m-auto'>

                            <div className='mt-10'>
                                <Image width="400" height="350" src="/assets/networkblogevent/blog.jpg" alt='Blog' title='Blog'/>
                                <p className='font-bold text-xl mt-4 text-[#f58634]'>Blog</p>
                                <p className='text-[#4c5158] font-medium w-[80%]'>Modern Work Management Using Microsoft Project</p>
                            </div>

                            <div className='mt-10'>
                                <Image width="400" height="350" src="/assets/networkblogevent/blog2.jpg" alt='Blog' title='Blog'/>
                                <p className='font-bold text-xl mt-4 text-[#f58634]'>Blog</p>
                                <p className='text-[#4c5158] font-medium w-[80%]'>Inbound Marketing - What is it? & why does it matter?</p>
                            </div>

                            <div className='mt-10'>
                                <Image width="400" height="350" src="/assets/networkblogevent/event.jpg" alt='Blog' title='Blog'/>
                                <p className='font-bold text-xl mt-4 text-[#f58634]'>Event</p>
                                <p className='text-[#4c5158] font-medium w-[80%]'>Modern Work Management Using Microsoft Project</p>
                            </div>



                        </div>

                    </div>
                </div>
            </>
        );
}
export default Blogs;