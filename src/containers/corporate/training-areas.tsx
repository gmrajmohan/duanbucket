import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import AreaDetails from './area-details';
import Link from 'next/link';

interface TrainingAreas {}

const TrainingAreas = () => {
        return (
            <>
                <div className={ContainerWidth + " py-10 mt-4"}>
                    <h2 className="text-[#114466] text-3xl font-normal">Corporate Training Areas</h2>
                    <p className='text-[#114466] font-normal mt-2 text-md'>Our corporate training covers a diverse range of business skills and competencies, including:</p>
                </div>

                <AreaDetails/>

            </>
        );
}
export default TrainingAreas;