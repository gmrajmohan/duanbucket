import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface InsAreaDetails {}

const InsAreaDetails = () => {
        return (
            <>
                <div className="bg-[url('/assets/images/corporate/insareabg.jpg')] bg-center bg-top bg-no-repeat bg-cover p-5">
                    <div className={ContainerWidth + " py-10"}>

                        {/* 1 */}
                        <div className='bg-[#0b6faf] opacity-90 lg:w-[55%] p-6 lg:flex items-center gap-6 text-white mb-5'>
                            <Image width="70" height="70" src="/assets/images/corporate/icons/management.png" alt='' title=''/>
                            <div>
                                <h4 className='font-bold text-xl'>Office Automation</h4>
                                <p className='text-sm font-light'>We equip your students with essential skills for efficient office automation, ensuring they can proficiently navigate and utilise the latest office productivity tools to enhance workplace productivity, ultimately increasing their employability.</p>
                            </div>
                        </div>
                        {/* 1 */}

                        {/* 1 */}
                        <div className='bg-orange-600 opacity-90 lg:w-[55%] p-6 lg:flex items-center gap-6 text-white mb-5'>
                            <Image width="70" height="70" src="/assets/images/corporate/icons/digital.png" alt='' title=''/>
                            <div>
                                <h4 className='font-bold text-xl'>Digital Marketing</h4>
                                <p className='text-sm font-light'>Stay competitive in the digital age by mastering the latest online marketing strategies with the help of our marketing simulator. Our training is designed to meet your business needs, ensuring your team gains the skills required to excel in their roles.</p>
                            </div>
                        </div>
                        {/* 1 */}

                        {/* 1 */}
                        <div className='bg-[#0b6faf] opacity-90 lg:w-[55%] p-6 lg:flex items-center gap-6 text-white mb-5'>
                            <Image width="70" height="70" src="/assets/images/corporate/icons/finance.png" alt='' title=''/>
                            <div>
                                <h4 className='font-bold text-xl'>Career Skills</h4>
                                <p className='text-sm font-light'>We train on essential interview skills, empowering your students to face interviews with confidence and increasing their chances of landing their desired job.</p>
                            </div>
                        </div>
                        {/* 1 */}



                    </div>
                </div>

            </>
        );
}
export default InsAreaDetails;