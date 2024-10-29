import React from 'react'
import { ContainerWidth } from '@/utils/width'
import Heading from '@/components/Heading'
import Image from 'next/image'
export const Address = () => {
  return (
    <div className={ContainerWidth + " lg:mt-10"}>
        <div className="lg:max-w-7xl m-auto lg:gap-10  mt-4 pt-8 pb-8">
        <Heading content={"Corporate Office"} type={20} />
        <div className="flex gap-4 items-center">
          <Image
            src={"/assets/contactus/pointer.svg"}
            width={20}
            height={10}
            alt="spot"
          />
          <p>
          1st Floor, K.R. Ahamed Sha office complex, No. 25, Dr. Radhakrishnan Salai, Mylapore, Chennai - 600 004,Tamil Nadu, India
          </p>
        </div>
      
       
      </div>
    </div>
  )
}
