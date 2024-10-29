import Link from "next/link";
import React, { useState, useCallback } from "react";
import MegaMenu from "./mega-menu";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavLink = ({
  title,
  href,
  isMegaMenu,
  megaMenuLinks,
  ContentMegaLink,
  TestLinksContents,
  className,
  id,
  Show,
}) => {
  const [isMegaMenuShown, setIsMegaMenuShown] = useState(false);
  const [Title, setTitle] = useState(title);
  const [Hover, setHover] = useState(false);

  const HandleNavShowParent = useCallback((data) => {
    setIsMegaMenuShown(data);
  }, []);

  return (
    isMegaMenu &&
    megaMenuLinks && (
      <>
        <div
          className={` ${
            Hover == true ? "hoverable" : ""
          } lg:w-[100%] w-[90%] m-auto`}
        >
          <div
            className={`sm:mb-0 mega-menu `}
            onMouseOver={() => setIsMegaMenuShown(true)}
            onMouseOut={() => setIsMegaMenuShown(false)}
          >
            <MegaMenu
              title={Title}
              megaMenuLinks={megaMenuLinks}
              ContentMegaLink={ContentMegaLink}
              isMegaMenuShown={isMegaMenuShown}
              setIsMegaMenuShown={setIsMegaMenuShown}
              TestLinksContents={TestLinksContents}
              HandleNavShowParent={HandleNavShowParent}
              Show={Show}
            />
          </div>
        </div>
      </>
    )
  );
};

export default NavLink;
