import Head from "next/head";
import Layout from "@/containers/layout/layout";
import Hero from "@/containers/home/hero";
import CourseCardTab from "@/containers/home/CourseCard/main";
import StudentExpMain from "@/containers/home/StudendExp/main"
import CorporateTraining from "@/containers/home/CorporateTraining/main";
import Strip from "@/containers/strip";
import FormSection from "@/containers/form-section";
import Benchmark from "@/containers/benchmark-section";
import OtherPrograms from "@/containers/other-programs";
import { MutableRefObject, useRef, useState } from "react";
import HomeContext from "@/Context/home";
import Fireworks from "./Confiti";


export default function Home() {
 
  const scrollToRef = useRef<HTMLDivElement>(null)
  const handleScroll = (ref: MutableRefObject<HTMLDivElement | null>) =>{
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  const [ConffitiShow, setConffitiShow] = useState<boolean>(true);

  setTimeout(() => {
    setConffitiShow(false);
  }, 10000);
  return (
    <>
    <HomeContext.Provider value={{scrollToRef,handleScroll}}>
      <Head>
        <title>SynergySBS® - Management Training Institute | Organized Project Management Courses</title>
        <meta
          name="description"
          content="Synergy®-India's Largest Network of Management Training Institute. Synergy® is organized around School of Project Management, School of Operational Excellence and School of People Skills."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Layout>
          {/* <div className=""  >
            <Fireworks/> 
          </div> */}
          {/* <Conffi/> */}
        <Hero /> 
        <Strip/>
        <FormSection/>
        <CourseCardTab />
        <OtherPrograms/>
        <Benchmark/>
        <StudentExpMain/>
        <CorporateTraining/>
      </Layout>
      </HomeContext.Provider>
    </>
  );
}
