import Image from "next/image";
import { ContainerWidth } from "@/utils/width";
import Link from "next/link";

interface TrainingIcon {}

const TrainingIcon = () => {
  return (
    <>
      <div className="shadow-md border-2 p-10 mt-14 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {/* Icon 1 */}
        <div className="">
          <Image
            width={50}
            height={50}
            src="/assets/images/corporate/icons/customized.png"
            alt=""
            title=""
          />
          <p className="font-bold text-md mt-4 text-[#114466]">
            Customized Training Solutions
          </p>
          <p className="text-[13.5px]  font-semibold mt-2 text-[#114466]">
            Tailored to the unique needs of your organisation, we ensure that
            employees acquire skills directly applicable to their roles.
          </p>
        </div>
        {/* Icon 1 */}

        {/* Icon 1 */}
        <div className="">
          <Image
            width={50}
            height={50}
            src="/assets/images/corporate/icons/expert.png"
            alt=""
            title=""
          />
          <p className="font-bold text-md mt-4 text-[#114466]">
            Expert Faculty
          </p>
          <p className="text-[13.5px]  font-semibold mt-2 text-[#114466]">
            {" "}
            Facilitated by industry experts our training imparts real-world
            insights for immediate application in the workplace.
          </p>
        </div>
        {/* Icon 1 */}

        {/* Icon 1 */}
        <div className="">
          <Image
            width={50}
            height={50}
            src="/assets/images/corporate/icons/facilities.png"
            alt=""
            title=""
          />
          <p className="font-bold text-md mt-4 text-[#114466]">
            State-of-the-Art Facilities
          </p>
          <p className="text-[13.5px]  font-semibold mt-2 text-[#114466]">
            Enjoy a conducive learning environment equipped with modern
            facilities and resources to enhance the training experience.
          </p>
        </div>
        {/* Icon 1 */}

        {/* Icon 1 */}
        <div className="">
          <Image
            width={50}
            height={50}
            src="/assets/images/corporate/icons/flexible.png"
            alt=""
            title=""
          />
          <p className="font-bold text-md mt-4 text-[#114466]">
            Flexible Training Delivery
          </p>
          <p className="text-[13.5px]  font-semibold mt-2 text-[#114466]">
            {" "}
            Choose from on-site training, virtual sessions, or a combination of
            both, adapting to your specific requirements.
          </p>
        </div>
        {/* Icon 1 */}
      </div>
    </>
  );
};
export default TrainingIcon;
