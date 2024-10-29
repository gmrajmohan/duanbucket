import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface AreaDetails {}

const AreaDetails = () => {
        return (
            <>
                <div className="bg-[url('/assets/images/corporate/areabg.jpg')] bg-center bg-top bg-no-repeat bg-cover p-5">
                    <div className={ContainerWidth + " py-10"}>

                        {/* 1 */}
                        <div className='bg-[#1074b4] opacity-90 lg:w-[55%] p-6 lg:flex items-center gap-6 text-white mb-5'>
                            <Image width="70" height="70" src="/assets/images/corporate/icons/management.png" alt='' title=''/>
                            <div>
                                <h4 className='font-bold text-xl'>Project Management</h4>
                                <p className='text-sm font-light'>Equip your team with essential project management principles, including training in Microsoft Project and Primavera, as well as PMP and CAPM preparatory courses for mid-level managers.</p>
                            </div>
                        </div>
                        {/* 1 */}

                        {/* 1 */}
                        <div className='bg-orange-600 opacity-90 lg:w-[55%] p-6 lg:flex items-center gap-6 text-white mb-5'>
                            <Image width="70" height="70" src="/assets/images/corporate/icons/solutions.png" alt='' title=''/>
                            <div>
                                <h4 className='font-bold text-xl'>Work Management Solutions</h4>
                                <p className='text-sm font-light'>Synergy provides agile work management solutions that enhance collaboration across teams, from idea inception to final delivery. Our primary platform, Jira, provides specialized products and deployment options designed for Software, IT, Business, Ops teams, and more.</p>
                            </div>
                        </div>
                        {/* 1 */}

                        {/* 1 */}
                        <div className='bg-blue-600 opacity-90 lg:w-[55%] p-6 lg:flex items-center gap-6 text-white mb-5'>
                            <Image width="70" height="70" src="/assets/images/corporate/icons/finance.png" alt='' title=''/>
                            <div>
                                <h4 className='font-bold text-xl'>Finance and Accounting</h4>
                                <p className='text-sm font-light'>Empower your team with financial management, budgeting, and advanced accounting skills, including in-depth training on topics like GST, VAT, income tax, advanced computation, and financial statements, including MIS reporting.</p>
                            </div>
                        </div>
                        {/* 1 */}

                        {/* 1 */}
                        <div className='bg-orange-600 opacity-90 lg:w-[55%] p-6 lg:flex items-center gap-6 text-white'>
                            <Image width="70" height="70" src="/assets/images/corporate/icons/digital.png" alt='' title=''/>
                            <div>
                                <h4 className='font-bold text-xl'>Digital Marketing</h4>
                                <p className='text-sm font-light'>Stay competitive in the digital age by mastering the latest online marketing strategies with the help of our marketing simulator. Our training is designed to meet your business needs, ensuring your team gains the skills required to excel in their roles.
</p>
                            </div>
                        </div>
                        {/* 1 */}



                    </div>
                </div>

            </>
        );
}
export default AreaDetails;