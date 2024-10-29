import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";
import MegaMenu from "./mega-menu";

const NavLinkMobile = ({
    title,
    href,
    className,
    isMegaMenu,
    megaMenuLinks,
    index,
    activeIndex,
    setActiveIndex,
}) => {
    const handleSetIndex = (index) =>
        activeIndex !== index ? setActiveIndex(index) : setActiveIndex(-1);
    return (
        <>
            {isMegaMenu ? (
                <>
                    <a
                        className={
                            "cursor-pointer py-3 px-2 border-t-[0.5px] border-b-[0.5px] border-theme-gray-200 flex justify-between items-center " +
                            (activeIndex === index &&
                                "bg-theme-red text-white ") +
                            className
                        }
                        onClick={() => handleSetIndex(index)}
                    >
                        <span className="px-2">{title}</span>
                        {activeIndex !== index ? (
                            <ChevronDownIcon className="w-6 h-6 mr-2" />
                        ) : (
                            <ChevronUpIcon className="w-6 h-6 mr-2 text-white" />
                        )}
                    </a>
                    {activeIndex === index && (
                        <MegaMenu title={title} megaMenuLinks={megaMenuLinks} />
                    )}
                </>
            ) : (
                <Link href={href}>
                   
                        {title}
                  
                </Link>
            )}
        </>
    );
};

export default NavLinkMobile;
