import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface Salaries {}

const Salaries = () => {
        return (
            <>
                <div className='bg-[#f0f0f0] m-auto lg:py-14 py-10'>
                    <div className={ContainerWidth + ' '}>

                        <h3 className='text-[#114466] lg:text-3xl text-center text-xl font-light'>The average <span className='font-bold text-[#E64077]'>annual salary </span> of a <span className='font-bold'>Scrum Master in India is approximately Rs. 8 lakhs.</span></h3>

                        {/* <h5 className='font-bold text-[#114466] text-xl mt-8'>PMP Salaries in India</h5> */}

                        <div className='lg:flex gap-5 justify-center mt-10 items-center text-white text-sm text-center lg:w-[90%] m-auto'>

                            <div className='bg-[#E64077] p-2 text-xl lg:w-[30%] shadow-lg'>
                                Entry-level <span className='font-medium'>Rs. 5-10</span> <span className='text-sm'>L/PA</span>
                            </div>

                            <div className='font-bold text-5xl text-pink-600 w-[5%] m-auto'>
                                &bull;
                            </div>

                            <div className='bg-[#052550] p-2 text-xl lg:w-[30%] shadow-lg'>
                                Mid-level <span className='font-medium'>Rs. 7-12 </span> <span className='text-sm'>L/PA</span>
                            </div>

                            <div className='font-bold text-5xl text-[#052550] lg:w-[5%] m-auto'>
                                &bull;
                            </div>

                            <div className='bg-[#E64077] p-2 text-xl lg:w-[30%] shadow-lg'>
                                Senior-level <span className='font-medium'>Rs. 10 - 20</span> <span className='text-sm'>L/PA</span>
                            </div>


                        </div>

                    </div>
                </div>
            </>
        );
}
export default Salaries;