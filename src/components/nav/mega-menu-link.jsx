import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';

function MegaMenuLink({ title, href, image, isSectionTitle }) {
  return isSectionTitle ? (
    <span className='flex flex-col'>
      <span className='m-1 title-menu-font text-sm border p-1 mt-3'>
        <Image width={600} height={400} alt="icon"
          className='menu-pointer-icon'
          src='/assets/images/social/pointer.svg'
        />{' '}
        {title}
      </span>
      {/* <span className="bg-theme-gray-200 p-[1.5px] w-full m-1"></span> */}
    </span>
  ) : image ? (
    <span>
      <Image width={600} height={400} alt="icon" src={image} className='w-64' />
    </span>
  ) : (
    <a
      href={href}
      className='p-1 text-sm hover:bg-theme-red hover:text-white flex justify-between items-center submenu-list'
    >
      <span>{title }{title ===  "Python for professionals" ? <span id="demo" >NEW</span> : ""}</span>
      <ArrowRightIcon className='w-4 h-4 font-bold text-white' />
    </a>
  );
}

export default MegaMenuLink;
