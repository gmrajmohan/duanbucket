import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  Typography,
  Button,
  List,
  ListItem,
  IconButton,
} from "@material-tailwind/react";
import { useContext } from "react";
import HomeContext from "@/Context/home";
export function CarouselWithContent() {
  const BannerArr = [
    // {
    //   id: 0,
    //   url: (
    //     <>
    //       <Link
    //         className="cursor-pointer"
    //         href="https://interneasy.in/?menu=1&ad=26&cm=1719&adpage=Web_Banner#synergybs"
    //         target="_blank"
    //       >
    //         <Image
    //           src="/assets/interneasysynergy.jpg"
    //           alt="interneasy"
    //           className="lg:h-full h-[200px] w-full object-cover lg:block hidden"
    //           width={900}
    //           height={800}
    //           priority
    //         />
    //         <Image
    //           src="/assets/interneasy-syngergy-mb.jpg"
    //           alt="interneasy"
    //           className="lg:h-full  w-full object-cover lg:hidden block"
    //           width={900}
    //           height={800}
    //           priority
    //         />
    //       </Link>
    //     </>
    //   ),
    // },
    // {
    //   id: 1,
    //   url: (
    //     <>
    //       <Link
    //         className="cursor-pointer"
    //         href="https://synergysbs.com/finmaster-accounting-career-festival/?menu=0&ad=26&cm=1445&adpage=Web_Banner"
    //         target="_blank"
    //       >
    //         <Image
    //           src="/assets/images/banners/home/finmaster-banner.jpg"
    //           alt="FINMASTER"
    //           className="lg:h-full h-[200px] w-full object-cover lg:block hidden"
    //           width={900}
    //           height={800}
    //           priority
    //         />
    //         <Image
    //           src="/assets/images/banners/home/finmaster-banner-mb.jpg"
    //           alt="FINMASTER"
    //           className="lg:h-full  w-full object-cover lg:hidden block"
    //           width={900}
    //           height={800}
    //           priority
    //         />
    //       </Link>
    //     </>
    //   ),
    // },
    {
      id: 0,

      url: (
        <>
          <Button
            className="cursor-pointer p-0 rounded-none"
            onClick={() => handleScroll(scrollToRef)}
          >
            <Image
              src="/assets/images/banners/home/pmp-banner.jpg"
              alt="PMP"
              className="lg:h-full h-[200px] w-full object-cover lg:block hidden"
              width={1920}
              height={800}
              priority
            />
            <Image
              src="/assets/images/banners/home/pmp-banner-mb.jpg"
              alt="PMP"
              className="lg:h-full  w-full object-cover lg:hidden block"
              width={900}
              height={800}
              priority
            />
          </Button>
        </>
      ),
    },
  ];
  const { scrollToRef, handleScroll } = useContext(HomeContext);

  return (
    <Carousel
      className="max-w-[1920px] m-auto"
      prevArrow={() => <div className=""></div>}
      nextArrow={() => <div className=""></div>}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 lg:z-50 flex -translate-x-2/3 gap-2 text-center justify-center lg:left-[50%] left-10 ">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`rounded-full p-2 bg-blue-500 text-white relative cursor-pointer ${
                activeIndex === i ? "w-1 bg-white " : "w-1 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            >
              {/* Create a black circular background using an inner element */}
              <div className="rounded-full bg-black w-2 h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </span>
          ))}
        </div>
      )}
    >
      {BannerArr.map((values) => (
        <div className="relative w-full ">
          {values.url}
          {/* <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25 ">
            <div className="left-10 w-[1440px] lg:px-24 px-10">
              <h2
                className="mb-2  text-orange-600 font-semibold bannerTextLeading"
              >
               Earn your PMP Certificate <br />  in just 35 hours!

                
              </h2>

              <ul className="mt-4 lg:text-xl">
                <li className="text-white mt-2">
                  -  Aligned with PMBOK- 7th edition
                </li>
                <li className="text-white mt-2">- Comprehensive learning aids</li>
                <li className="text-white mt-2">
                - Enjoy 1-year access to PMI Digital Material
                </li>{" "}
              </ul>

              <Button
                className="mt-10 px-8 py-4 rounded bg-orange-600 font-light"
                onClick={() => handleScroll(scrollToRef)}
              >
                Enroll Now
              </Button>
            </div>
          </div> */}
        </div>
      ))}
    </Carousel>
  );
}
