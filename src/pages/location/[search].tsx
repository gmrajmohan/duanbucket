// src/pages/index.tsx (or wherever Home component resides)
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/containers/layout/layout";
import VirtualBanner from "@/containers/virtual/banner";
import Stats from "@/containers/virtual/virtual-status";
import VirtualCourse from "@/containers/virtual/virtual-course";
import Head from "next/head";
import VirtualContent from "@/containers/virtual/virtual-content";
import { GetServerSideProps } from "next";

export const AddHyphen = (CenterValues: any) => {
  const Search1 = CenterValues.replace(", ", "-");
  const Search = Search1.replace(/\s+/g, "+");
  return Search;
};

const Home: React.FC<any> = ({ centreData, randomCenterDetails, locationSlugWithInt, domainName, search }) => {
  const router = useRouter();
  const [CenterName, setCenterName] = useState<any>();
  const [Canonical, setCanonical] = useState<string | undefined>();

  useEffect(() => {
    if (centreData && centreData.length > 0) {
      setCenterName(centreData[0]?.centre_name);
    }
  }, [centreData]);

  const Title =
    "Synergy Courses in *** | Professional Training";

  const Desc =
    "Unlock professional growth with Synergy Courses in ***. Learn Project Management, Digital Marketing, Business Accounting. Enroll today!";

  useEffect(() => {
    const path = router.asPath;
    const values = path.split("/");
    const changeVar = "location";
    setCanonical(
      values[1] === "virtual"
        ? `https://ssr-kappa-nine.vercel.app${changeVar}/${search}/`
        : `https://ssr-kappa-nine.vercel.app${path}`
    );
  }, [router.asPath, search]);

  return (
    <>
      <Head>
        <title>{CenterName && Title && Title.replace("***", CenterName)}</title>
        <meta name="google-site-verification" content="-IzBvI0xCgjdecwPptfIMvQscAJZ2DEraSTctzZ-q30" />
        <meta
          name="description"
          content={CenterName && Desc && Desc.replace("***", CenterName)}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={Canonical} />
      </Head>
      <Layout>
        <VirtualBanner centre={centreData} />
        <Stats />
        <VirtualContent centre={centreData} />
        <VirtualCourse
          centreDetails={centreData}
          RandomCenterDetails={randomCenterDetails}
          LocationSlugWithInt={locationSlugWithInt}
        />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, req } = context;
  const search = query.search as string || "";
  const indexofcourse = query.indexofcourse as string || "";

  let centreData = null;
  let randomCenterDetails = null;
  let domainName = req.headers.host || "";
  let locationSlugWithInt = null;

  const fetchData = async (Center: string) => {
    try {
      const response = await fetch(`https://api-publicsite.caddcentre.com/api/centreDetail/${Center}/3`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
      return null;
    }
  };

  if (search) {
    const searchValue = search.replace(/-/g, ", ").replace(/[+]/g, " ");
    const data = await fetchData(searchValue);
    if (data) {
      centreData = data.CentreDetails;
      randomCenterDetails = data.randCentre;
      locationSlugWithInt = 1;
    }
  } else if (indexofcourse) {
    const data = await fetchData(indexofcourse);
    if (data) {
      centreData = data.CentreDetails;
      randomCenterDetails = data.randCentre;
      locationSlugWithInt = 1;
    }
  }

  if (!centreData || centreData.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      centreData: centreData || [],
      randomCenterDetails: randomCenterDetails || [],
      domainName,
      search,
      locationSlugWithInt
    }
  };
};

export default Home;
