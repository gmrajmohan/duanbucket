import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface InstitutionsIcon {}

const InstitutionsIcon = () => {
        return (
            <>

                <div className='shadow-md border-2 p-10 mt-20 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                    
                    {/* Icon 1 */}
                    <div className=''>
                        <Image width={50} height={50} src="/assets/images/corporate/icons/customized.png" alt='' title=''/>
                        <p className='font-bold text-md mt-4 text-[#114466]'>Faculty Development</p>
                        <p className='text-[13.5px] font-medium mt-2 text-[#114466]'>Empower teaching staff with programs in digital marketing, project management, and finance tailored to various academic disciplines.
</p>
                    </div>
                    {/* Icon 1 */}

                    {/* Icon 1 */}
                    <div className=''>
                        <Image width={50} height={50} src="/assets/images/corporate/icons/expert.png" alt='' title=''/>
                        <p className='font-bold text-md mt-4 text-[#114466]'>Expert Faculty</p>
                        <p className='text-[13.5px]  font-medium mt-2 text-[#114466]'>Our customised courses seamlessly weave essential business skills into your curriculum, providing students with academic excellence and practical, sought-after skills.</p>
                    </div>
                    {/* Icon 1 */}

                    {/* Icon 1 */}
                    <div className=''>
                        <Image width={50} height={50} src="/assets/images/corporate/icons/facilities.png" alt='' title=''/>
                        <p className='font-bold text-md mt-4 text-[#114466]'>State-of-the-Art Facilities</p>
                        <p className='text-[13.5px]  font-medium mt-2 text-[#114466]'> Comprehensive career development and placement support ensure students are well-prepared for immediate job placement upon graduation.</p>
                    </div>
                    {/* Icon 1 */}



                    {/* Icon 1 */}
                    <div className=''>
                        <Image width={50} height={50} src="/assets/images/corporate/icons/flexible.png" alt='' title=''/>
                        <p className='font-bold text-md mt-4 text-[#114466]'>Flexible Training Delivery</p>
                        <p className='text-[13.5px]  font-medium mt-2 text-[#114466]'>Synergy enhances your institution's reputation and industry relevance through real-world experiences like internships, workshops, and projects.</p>
                    </div>
                    {/* Icon 1 */}




                </div>

            </>
        );
}
export default InstitutionsIcon;