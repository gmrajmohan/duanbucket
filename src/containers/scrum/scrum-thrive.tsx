import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface Thrive {}

const Thrive = () => {
        return (
            <>
                <div className='bg-[#fff] m-auto lg:py-14 py-10'>
                    <div className={ContainerWidth + ' '}>

                        <h3 className='text-[#114466] lg:text-3xl text-xl font-light'><span className='font-bold text-[#E64077]'>Top 10 industries</span> that hire Scrum certified professionals:</h3>

                        <div className='grid lg:grid-cols-5 grid-cols-2 gap-10 mt-10'>

                            <div className='shadow-lg rounded-lg p-5'> <Image className='block m-auto' width="50" height="50" src="/assets/images/scrum/icons/scrum-icons/construction.png" alt='' title=''/> <p className='text-center text-md text-[#114466] font-medium mt-2'>Construction</p> </div>

                            <div className='shadow-lg rounded-lg p-5'> <Image className='block m-auto' width="50" height="50" src="/assets/images/scrum/icons/scrum-icons/engineering.png" alt='' title=''/> <p className='text-center text-md text-[#114466] font-medium mt-2'>Engineering</p> </div>

                            <div className='shadow-lg rounded-lg p-5'> <Image className='block m-auto' width="50" height="50" src="/assets/images/scrum/icons/scrum-icons/manufacturing.png" alt='' title=''/> <p className='text-center text-md text-[#114466] font-medium mt-2'>Manufacturing</p> </div>

                            <div className='shadow-lg rounded-lg p-5'> <Image className='block m-auto' width="50" height="50" src="/assets/images/scrum/icons/scrum-icons/technology.png" alt='' title=''/> <p className='text-center text-md text-[#114466] font-medium mt-2'>Technology</p> </div>

                            <div className='shadow-lg rounded-lg p-5'> <Image className='block m-auto' width="50" height="50" src="/assets/images/scrum/icons/scrum-icons/finance.png" alt='' title=''/> <p className='text-center text-md text-[#114466] font-medium mt-2'>Finance</p> </div>

                            <div className='shadow-lg rounded-lg p-5'> <Image className='block m-auto' width="50" height="50" src="/assets/images/scrum/icons/scrum-icons/healthcare.png" alt='' title=''/> <p className='text-center text-md text-[#114466] font-medium mt-2'>Healthcare</p> </div>

                            <div className='shadow-lg rounded-lg p-5'> <Image className='block m-auto' width="50" height="50" src="/assets/images/scrum/icons/scrum-icons/management.png" alt='' title=''/> <p className='text-center text-md text-[#114466] font-medium mt-2'>Management</p> </div>

                            <div className='shadow-lg rounded-lg p-5'> <Image className='block m-auto' width="50" height="50" src="/assets/images/scrum/icons/scrum-icons/utilities.png" alt='' title=''/> <p className='text-center text-md text-[#114466] font-medium mt-2'>Utilities</p> </div>

                            <div className='shadow-lg rounded-lg p-5'> <Image className='block m-auto' width="50" height="50" src="/assets/images/scrum/icons/scrum-icons/oil-gas.png" alt='' title=''/> <p className='text-center text-md text-[#114466] font-medium mt-2'>Oil and Gas</p> </div>

                            <div className='shadow-lg rounded-lg p-5'> <Image className='block m-auto' width="50" height="50" src="/assets/images/scrum/icons/scrum-icons/legal-services.png" alt='' title=''/> <p className='text-center text-md text-[#114466] font-medium mt-2'>Legal Services</p> </div>

                        </div>


                    </div>
                </div>
            </>
        );
}
export default Thrive;