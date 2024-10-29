import type { FC } from 'react';
import { CarouselWithContent } from '@/components/Carousel/main';
import Image from 'next/image';
interface heroProps {}

const Hero: FC<heroProps> = ({}) => {
  
        return (
            <>
                <div>
                    <Image src={"/assets/terms/terms.jpg"} width={1400} height={600} alt='term and conditions'/>
                </div>
            </>
        );
}
export default Hero;