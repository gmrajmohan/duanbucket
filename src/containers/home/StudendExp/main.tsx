import type { FC } from 'react';
import Heading from '@/components/Heading';
import { ContainerWidth } from '@/utils/width';
import { StudentCarousel } from './Carousel';
interface StudentExpMainProps {}

const StudentExpMain: FC<StudentExpMainProps> = ({}) => {
        return (
            <>
                <div className={`bg-[#052550] m-auto lg:pt-14 py-10`}>
                <div className={ContainerWidth}>
                <Heading type={1}/>
                <StudentCarousel/>
                </div>
                </div>
            </>
        );
}
export default StudentExpMain;