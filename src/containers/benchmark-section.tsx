import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import Link from 'next/link';

interface BenchmarkSec {}

const Benchmark = () => {
        return (
            <>
                <div className='bg-[#fff] py-10 lg:mt-14'>
                    <div className={ContainerWidth}>

                        <Image width={300} height={100} src="/assets/images/benchmark.png" alt='Benchmark' title='Benchmark' />

                    </div>

                </div>


                <div className='bg-[#f58634] lg:py-20 py-10'>

                    <div className={ContainerWidth + " px-10 lg:flex"}>

                    {/* left section */}
                    <div className='lg:w-[50%] w-[100%] relative'>
                        <h2 className='text-white text-3xl'>Benchmark Your Career: <span className='font-bold block'>Get Certified.</span></h2>
                        <p className='text-md mt-3 text-white'>Synergy´s Benchmark is a powerful web based mock test portal, created exclusively for the participants of Project Management Professional (PMP)® exam. The portal thousands of project management professionals across India and abroad.</p>

                        <div className='mt-10 flex lg:gap-10 gap-5 font-normal text-md text-white'>
                            <a href="https://mock.synergysbs.com/register.php" className='flex lg:gap-2 gap-1 items-center' target='_blank'>Take the MOCK Test <Image width={17} height={17} src="/assets/images/arroww.png" alt='Take the MOCK Test' title=''/></a>
                            <a href="https://mock.synergysbs.com/register.php" className='flex lg:gap-2 gap-1 items-center' target='_blank'>Register Now  <Image width={17} height={17} src="/assets/images/arroww.png" alt='Take the MOCK Test' title=''/></a>
                        </div>

                    </div>
                    {/* left section */}

                    {/* right section */}
                    <div className='lg:w-[55%]'>
                        <Image className='lg:absolute lg:right-[0px] lg:mt-[-200px] mt-5 lg:w-[600px] w-[100%] m-auto' width={600} height={100} src="/assets/images/benchmark-rg-img.jpg" alt='Benchmark' title='Benchmark' />
                    </div>
                    {/* right section */}

                    </div>

                </div>


            </>
        );
}
export default Benchmark;