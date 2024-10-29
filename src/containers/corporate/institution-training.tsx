import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import InstitutionsIcon from './Institution-icons';

interface InstitutionsTraining {}

const InstitutionsTraining = () => {
        return (
            <>
                <div className={ContainerWidth + " mt-20"}>

                    <div className='lg:flex justify-between gap-x-20 items-center'>
                    
                    <div className='lg:w-[60%] w-[100%]'>
                        <h2 className='text-[#114466] text-3xl font-normal'>Institutions Training</h2>
                        <p className='text-[#114466] mt-5 font-medium text-md'>At Synergy School of Business Skills, we understand the unique challenges and opportunities that educational institutions face. Whether you're a school, college, or university, we're here to help you
unlock your students full potential and drive excellence in education.</p>
                    </div>

                    <div className='lg:w-[35%] w-[100%]'>
                        <Image className='lg:ml-auto m-auto lg:mt-0 mt-5 block' width="300" height="100" src="/assets/images/corporate/rgvector2.png" alt='' title=''/>
                    </div>

                    </div>


                    <InstitutionsIcon/>

                </div>


            </>
        );
}
export default InstitutionsTraining;