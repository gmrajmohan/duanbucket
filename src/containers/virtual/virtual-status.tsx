import Image from "next/image";


const Stats = () =>{

return (
    <>
        <div className="bg-[#000]">
            <div className="lg:max-w-7xl m-auto py-5 p-5">

                <div className="grid md:grid-cols-5 grid-cols-2 md:gap-0 gap-5 md:divide-x text-white flex md:justify-between md:text-center text-[13px]">

                        <div className="flex gap-3 text-white items-center leading-3 md:justify-center">
                            {/* <Image width={45} height={45} src="/assets/images/virtualpage/icons/globe-white.png" alt="Globe" title="Globe" /> */}
                            <div className="text-left leading-3">
                                <p className="text-xl barlow_semi_consbold">90 Centres</p>
                                <p className="cabinet_regular">across the world</p>
                            </div>
                        </div>

                        <div className="flex gap-3 text-white items-center leading-3 md:justify-center">
                            {/* <Image width={45} height={45} src="/assets/images/virtualpage/icons/india-white.png" alt="Globe" title="Globe" /> */}
                            <div className="text-left leading-3">
                                <p className="text-xl barlow_semi_consbold">27 States</p>
                                <p className="cabinet_regular">across India</p>
                            </div>
                        </div>

                        <div className="flex gap-3 text-white items-center leading-3 md:justify-center">
                            {/* <Image width={45} height={45} src="/assets/images/virtualpage/icons/student-white.png" alt="Globe" title="Globe" /> */}
                            <div className="text-left leading-3">
                                <p className="text-xl barlow_semi_consbold">150000+</p>
                                <p className="cabinet_regular">Students Trained</p>
                            </div>
                        </div>

                        <div className="flex gap-3 text-white items-center leading-3 md:justify-center">
                            {/* <Image width={45} height={45} src="/assets/images/virtualpage/icons/book-white.png" alt="Globe" title="Globe" /> */}
                            <div className="text-left leading-3">
                                <p className="text-xl barlow_semi_consbold">40+ Design</p>
                                <p className="cabinet_regular">Courses</p>
                            </div>
                        </div>

                        <div className="flex gap-3 text-white items-center leading-3 md:justify-center">
                            {/* <Image width={45} height={45} src="/assets/images/virtualpage/icons/goal-white.png" alt="Globe" title="Globe" /> */}
                            <div className="text-left leading-3">
                                <p className="text-xl barlow_semi_consbold">100000+</p>
                                <p className="cabinet_regular">Student Entrepreneur</p>
                            </div>
                        </div>


                </div>

            </div>
        </div>
    </>
)
}
export default Stats;
