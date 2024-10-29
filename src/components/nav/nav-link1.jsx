import Link from 'next/link';
import React, { useState } from 'react';
import MegaMenu from './mega-menu';
import Image from 'next/image';
import { useMemo } from 'react';

const NavLink = ({ title, href, className, isMegaMenu, megaMenuLinks ,ContentMegaLink,TestLinksContents}) => {

  const [isMegaMenuShown, setIsMegaMenuShown] = useState(false);
  const [ShowingIndex, setShowingIndex] = useState(null);
  const [DropDown,showDropDown] = useState(false)

  const handleTitleIndex  = (data) =>{
    setShowingIndex(data)
  }

  const HandleDropdown = () =>{
    if(DropDown == false){
    showDropDown(true)
    }else{  
      showDropDown(false)
    }
  }

  return isMegaMenu && megaMenuLinks ? (
    <span className='hoverable lg:border-0 border-b-2 border-dashed border-red-600 '>
      <span
        className={
          'text-sm hover:text-theme-red hover:border-b-2 hover:border-b-theme-red cursor-pointer lg:mx-10 pb-1 ' +
          (isMegaMenuShown
            ? 'text-theme-red border-b-2 border-b-theme-red'
            : '') +
          className
        }
      >
        <span className='lg:text-[15px] text-[18px] lg:font-semibold font-bold lg:px-0 px-4 lg:py-0 py-4 lg:border-0 border-b-2 border-dashed border-red-600 lg:block flex justify-between lg:text-black text-red-600' onClick={HandleDropdown}>{title}
        
        <div className={"lg:hidden block toggle-btn" + " " + `${DropDown === true ? "active" : ""}` }>
          <div className={"arrow-top"}></div> 
        </div>
        </span> 
        {DropDown &&
        <span className='lg:hidden block'>
          {
      
              ContentMegaLink.map(()=>(
                <div key={indexs} className='text-[18px] lg:hidden block lg:px-0 px-4 lg:py-0 py-1 lg:mt-0 mt-4 lg:mb-0 mb-4 '>
                  <span className='lg:font-bold lg:block hidden font-semibold'>{value.Content}</span>
                  
                </div>
              ))
         
          }
        {ContentMegaLink.map((value,indexs)=>(
           <div key={indexs} className='text-[18px] lg:hidden block lg:px-0 px-4 lg:py-0 py-1 lg:mt-0 mt-4 lg:mb-0 mb-4 '>
            <span className='lg:font-bold lg:block hidden font-semibold'>{value.Content}</span>
         <span className='lg:font-bold lg:hidden block font-semibold' onClick={()=>handleTitleIndex(indexs)}>{value.Content}</span>
          
            {TestLinksContents.map((valuess)=>(
          <>
              <div className='lg:block hidden'>
              {
              valuess.Content.map((val,index)=>(
                <span className='grid' key={index}>{val.Title}</span>
              ))
              }
              </div>

              <div className='lg:hidden block '>
              {
              valuess.Content.map((val,index)=>(
                <>
                {
                  indexs === ShowingIndex && index === indexs   ? 
                  <div className='flex gap-4 lg:px-0 px-0 lg:py-0 py-2'>
                    <Image src={val.image} width={25} height={20}/>
                    <span className='grid mt-1' key={index}>{val.Title}</span> 
                  </div>
                  : ""
                }
                </>
              ))
              }
              </div>
          </>
            ))}
           
           </div> 
        ))}
        </span>
        
        }
      </span>
      <div
        className={`sm:mb-0 mega-menu `}
        onMouseOver={() => setIsMegaMenuShown(true)}
        onMouseOut={() => setIsMegaMenuShown(false)}
      >
        <MegaMenu title={title} megaMenuLinks={megaMenuLinks} ContentMegaLink={ContentMegaLink} TestLinksContents={TestLinksContents}/>
      </div>
    </span>
  ) : (
    <Link href={href} className='lg:mx-10 mx-1 lg:text-[15px] text-[18px] lg:font-semibold font-bold lg:border-0 border-b-2 border-dashed border-red-600 lg:px-0 px-3 lg:py-0 py-4'>
    {title}
    </Link>
  );
};

export default NavLink;
