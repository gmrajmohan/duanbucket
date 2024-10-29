import React from "react";
import Header from "./header";
import Footer from "./footer";
import TopBar from "./topbar";
import LastFooterSec from "./last-foot-section";
import Floater from "../../containers/static-floater-button";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

type reactchildrentype = { children: React.ReactNode };

const Layout = ({ children }: reactchildrentype) => {
  const ConatinerBase = "w-auto";
  const router = useRouter();
  const { adpage } = router.query;
  const { ad } = router.query;
  const { cm } = router.query;
  const course1 = "/course/python-software-training-course/";
  const [TopBars, setTopBar] = useState<any>();
  const [Footers, setFooters] = useState<any>();
  useEffect(() => {
    const Topbar = adpage == undefined &&
      ad == undefined &&
      cm == undefined && <TopBar />;
    setTopBar(Topbar);
    const Foot =
      adpage == undefined && ad == undefined && cm == undefined ? (
        <Footer />
      ) : (
        <LastFooterSec />
      );
    setFooters(Foot);
  }, [adpage, ad, cm, router.asPath]);

  return (
    <>
      <div className="">
        {TopBars}
        <Header />
        <div className={ConatinerBase}>{children}</div>
        {adpage == undefined &&
        ad == undefined &&
        cm == undefined &&
        router.asPath != course1 ? (
          <Footer />
        ) : (
          <LastFooterSec />
        )}
          <Floater/>
      </div>
    </>
  );
};

export default Layout;
