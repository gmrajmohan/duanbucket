import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface TestimonialsCont {}

const TestimonialsCont = () => {
        return (
            <>
                <div className={ContainerWidth + " py-10"}>
                    <h1 className='font-normal text-center lg:text-3xl text-2xl text-[#134364]'>Testimonials</h1>
                    <p className='text-md mt-2 text-center'>Here is how SSBS course meet their expectations and consistently attracts talented professionals coming from very diverse backgrounds.</p>
                </div>
            </>
        );
}
export default TestimonialsCont;