import Image from 'next/image';
import type { FC } from 'react';

interface stripProps {}



const Strip: FC<stripProps> = ({}) => {
    const stripImage = [
        {
            id : 1,
            image : "/assets/strip-icon/pro01a.jpg"
        },
        {
            id : 2,
            image : "/assets/strip-icon/pro02.jpg"
        },
        {
            id : 3,
            image : "/assets/strip-icon/pro03.jpg"
        },
        {
            id : 4,
            image : "/assets/strip-icon/pro04.jpg"
        },
        {
            id : 5,
            image : "/assets/strip-icon/pro05.jpg"
        }

    ]
        return (
            <>
                <div className='bg-white md:flex justify-center items-center m-auto '>
                        <div className='text-blue-500 text-center md:text-normal'>
                            <p className='text-xl'>Our Training</p>
                            <p className='text-xl'>Partners</p>
                        </div>
                        <div className='flex gap-2 m-auto md:flex-row flex-col md:justify-center md:items-center'>
                                {
                                    stripImage.map((values)=>(
                                        <Image src={values.image} alt='img' width={190} height={100}/>
                                    ))
                                }
                        </div>
                </div>
            </>
        );
}
export default Strip;