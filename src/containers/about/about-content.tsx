import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface AboutCont {}

const AboutCont = () => {
        return (
            <>
                <div className={ContainerWidth + " py-10"}>
                    <h1 className='font-normal lg:text-3xl text-2xl text-[#134364]'>About <span className='text-[#F48632] font-medium'>Synergy School of Business Skills</span></h1>
                    <p className='text-md mt-5'>Synergy School of Business Skills, a division of CADD Centre, stands as India's premier network of management training institutes. Our core focus is to offer short-term programs that empower professionals with essential skills in areas such as corporate/life skills, project management, operational excellence, and people skills.<br/><br/>We're proud to be a global leader as a Authorised Training Partner for the Project Management Institute (PMI)®, a globally respected organization of project management professionals. With a vast network of 60 centers throughout India, Synergy also holds prestigious partnerships as an Oracle Gold Certified Partner and a Scrum Study Partner. Annually, we train and certify over 40,000 professionals and individuals in various courses.</p>
                </div>
            </>
        );
}
export default AboutCont;