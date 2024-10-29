import type { FC } from 'react';
import { ContainerWidth } from '@/utils/width';
import Heading from '@/components/Heading';
import Blog from './Blog';
interface NetWorkBlogEventProps {}

const NetWorkBlogEvent: FC<NetWorkBlogEventProps> = ({}) => {
        return (
            <>
                <div className={`bg-gray-100 m-auto lg:py-10 py-6` }>
                    <div className={ContainerWidth}>
                    <Heading content='Network / Blog / Events' type={4}/>
                    <p className='text-center'>Develop A Cutting Edge WorkforceMeet your organizational training needs and excel in today's competitive environment</p>
                    <Blog/>
                    </div>
                </div>
            </>
        );
}
export default NetWorkBlogEvent;