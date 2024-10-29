import type { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ContainerWidth } from "@/utils/width";
interface CompanyLogoCarouselProps {}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <Image src={"/assets/rarrow.png"} alt="img" width={20} height={40} />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <Image src={"/assets/larrow.png"} alt="img" width={20} height={40} />
    </div>
  );
}
export let settings_courseCard = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1800,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CompanyLogoCarousel: FC<CompanyLogoCarouselProps> = ({}) => {
  const ContentArray = [
    {
      id: 1,
      image: "/assets/corporateTraining/bosh.jpg",
    },
    {
      id: 2,
      image: "/assets/corporateTraining/lt.jpg",
    },
    {
      id: 3,
      image: "/assets/corporateTraining/vedanta.jpg",
    },
    {
      id: 4,
      image: "/assets/corporateTraining/vestas.jpg",
    },
   
  ];

  return (
    <>
      <div className={"md:max-w-[1440px] m-auto "}>
        <div className="slider-container md:px-40 px-8">
          <Slider {...settings_courseCard}>
            {ContentArray.map((values) => (
              <Image
                src={values.image}
                key={values.id}
                width={150}
                height={80}
                alt="img"
                className="p-2 m-2"
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default CompanyLogoCarousel;
