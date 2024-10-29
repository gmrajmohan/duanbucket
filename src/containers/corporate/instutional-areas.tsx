import Image from 'next/image';
import { ContainerWidth } from '@/utils/width';
import InsAreaDetails from './insarea-details';
import Link from 'next/link';

interface InsAreas {}

const InsAreas = () => {
        return (
            <>
                <div className={ContainerWidth + " py-16"}>
                    <h2 className="text-[#114466] text-3xl font-normal">Synergy's Institutional Training Areas</h2>
                    <p className='text-[#114466] font-normal mt-2 text-md'>Our institutional training encompasses a diverse range of crucial business skills and competencies tailored to prepare your students for a successful career, including:</p>
                </div>

                <InsAreaDetails/>

            </>
        );
}
export default InsAreas;