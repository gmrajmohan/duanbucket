import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface Salaries {}

const Salaries = () => {
        return (
            <>
                <div className='bg-[#f0f0f0] m-auto lg:py-14 py-10'>
                    <div className={ContainerWidth + ' '}>

                        <h3 className='text-[#114466] lg:text-3xl text-xl font-light'>Nearly <span className='font-bold text-[#f58634]'>22 million</span> new project management <span className='font-bold'>jobs will be created in the next five years.</span></h3>

                        {/* <h5 className='font-bold text-[#114466] text-xl mt-8'>PMP Salaries in India</h5> */}

                        <div className='lg:flex gap-5 justify-center mt-10 items-center text-white text-sm text-center'>

                            <div className='bg-[#f58634] p-2 text-xl lg:w-[30%] shadow-lg'>
                                Freshers <span className='font-medium'>Rs. 12 </span> <span className='text-sm'>L/PA</span>
                            </div>

                            <div className='font-bold text-5xl text-orange-600 w-[5%] m-auto'>
                                &bull;
                            </div>

                            <div className='bg-[#052550] p-2 text-xl lg:w-[30%] shadow-lg'>
                                Mid-level <span className='font-medium'>Rs. 14 </span> <span className='text-sm'>L/PA</span>
                            </div>

                            <div className='font-bold text-5xl text-[#052550] lg:w-[5%] m-auto'>
                                &bull;
                            </div>

                            <div className='bg-[#f58634] p-2 text-xl lg:w-[30%] shadow-lg'>
                                Advanced <span className='font-medium'>Rs. 18</span> <span className='text-sm'>L/PA</span>
                            </div>

                            <div className='font-bold text-5xl text-orange-600 w-[5%] m-auto'>
                                &bull;
                            </div>

                            <div className='bg-[#052550] p-2 text-xl lg:w-[30%] shadow-lg items-center'>
                                Average <span className='font-medium'>Rs. 17</span> <span className='text-sm'>L/PA</span>
                            </div>


                        </div>

                    </div>
                </div>
            </>
        );
}
export default Salaries;