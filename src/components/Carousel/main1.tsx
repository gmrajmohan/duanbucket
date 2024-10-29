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
import Link from "next/link";
import Image from "next/image";
export function CarouselWithContent() {
  const { scrollToRef, handleScroll } = useContext(HomeContext);

  const Banner = [
    {
      id: 2,
      extraContent: false,
      content: (
        <>
          <Link
            href="https://synergysbs.com/finmaster-accounting-career-festival/?menu=0&ad=26&cm=1445&adpage=Web_Banner"
            target="_blank"
          >
            <Image
              src="/assets/benchmark/finmaster-banner.jpg"
              alt="image 3"
              className="lg:h-full h-[200px] w-full object-cover lg:block hidden"
             
              width={900}
              height={800}
              priority
            />
            <Image
              src="/assets/benchmark/finmaster-banner-mb.jpg"
              alt="image 3"
              className="lg:h-full  w-full object-cover lg:hidden block"
           
              width={900}
              height={800}
              priority

            />
          </Link>
        </>
      ),
    },
    {
      id: 1,
      extraContent: true,
      content: (
        <>
          <Image
            src="/assets/images/banners/home/base1.jpg"
            alt="image 3"
            className="lg:h-full h-[200px] w-full object-cover lg:block hidden"
         
            width={900}
            height={800}
            priority

          />
          <Image
            src="/assets/gg.jpg"
            alt="image 3"
            className="lg:h-full  w-full object-cover lg:hidden block"
           
              width={900}
              height={800}
              priority

          />

<div
                className={`absolute inset-0 grid h-full w-full place-items-center bg-black/25  `}
              >
                <div className="left-10 lg:w-[1440px] lg:px-24 px-10">
                  <h2 className="mb-2 text-orange-600 font-semibold bannerTextLeading">
                    Earn your PMP Certificate <br /> in just 35 hours!
                  </h2>

                  <ul className="mt-4 lg:text-xl">
                    <li className="text-white mt-2">
                      - Aligned with PMBOK- 7th edition
                    </li>
                    <li className="text-white mt-2">
                      - Comprehensive learning aids
                    </li>
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
              </div>
        </>
      ),
    },
  ];

  return (
    <Carousel
      className=""
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4 lg:block hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 lg:block hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      {Banner.map((values, index) => (
        <>
          <div key={index}>
            {values.content}
            
          </div>
        </>
      ))}
      {/* <div>
       
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25 ">
          <div className="left-10 lg:w-[1440px] lg:px-24 px-10">
            <h2 className="mb-2 text-orange-600 font-semibold bannerTextLeading">
              Earn your PMP Certificate <br /> in just 35 hours!
            </h2>

            <ul className="mt-4 lg:text-xl">
              <li className="text-white mt-2">
                - Aligned with PMBOK- 7th edition
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
        </div>
      </div> */}
    </Carousel>
  );
}
