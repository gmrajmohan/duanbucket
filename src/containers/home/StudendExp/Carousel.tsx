import { Carousel, IconButton } from "@material-tailwind/react";
import Heading from "@/components/Heading";

export function StudentCarousel() {
  return (
    <Carousel
      className="rounded-xl md:h-[520px]"
      // TabIndicatorProps={{ display: 'none' }}
      navigation={
        ()=>(
          <span className="hidden"></span>
        )
      }
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute -bottom-10 right-[55%] -translate-y-2/4  mb-4 hidden"
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
          className="!absolute -bottom-10 right-[41%] -translate-y-2/4 mb-4  hidden"
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
      <div>
       <iframe src="https://player.vimeo.com/video/899147401?h=4ba8985998" frameBorder="0" className="lg:w-[75%] lg:h-[500px] m-auto" width={400} height={300}></iframe>

       {/* <img
          src="/assets/student/student1.jpg"
          alt="image 1"
          className="w-[75%] m-auto"
        /> */}
        {/* <Heading type={2} /> */}
      </div>
    </Carousel>
  );
}
