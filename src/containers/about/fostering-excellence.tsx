import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface Fostering {}

const Fostering = () => {
        return (
            <>
                <div className={ContainerWidth + " py-10"}>
                    <h1 className='font-normal lg:text-3xl text-2xl text-[#134364]'>Fostering Excellence <span className='text-[#F48632] font-medium block'>Our Network and Training Infrastructure</span></h1>
                    <p className='text-md mt-5'>Our extensive network spans across metros, cities, and towns, serving as a pivotal source for cultivating management and professional talents for small, medium, and large-scale industries, spanning manufacturing, services, and non-governmental organizations. Our faculty team is comprised of certified business coaches, project and quality management professionals, and software engineers, all of whom use a participatory and results-oriented approach to deliver high-quality training.<br/><br/>Synergy's training infrastructure is equipped with modern computer labs, executive classrooms, an extensive library of world-class course materials and reference materials, and a dedicated placement cell that fosters industry-institute partnerships, internships, projects, and employment opportunities.</p>
                </div>
            </>
        );
}
export default Fostering;