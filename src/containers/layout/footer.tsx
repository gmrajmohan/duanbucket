import React from "react";
import FooterTitle from "../../components/footer-title";
import {
  footerLinks1,
  footerLinks2,
  footerLinks3,
  footerLinks6,
} from "../../utils/links";
import Image from "next/image";
import Link from "next/link";
import { FooterLinks } from "../../utils/responses/Livewair/footer";
import { ContainerWidth } from "@/utils/width";
import { footerLinks4, footerLinks5 } from "../../utils/links";
import { FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#1B252F] py-5">
      <div
        className={`md:flex justify-between py-3 text-white text-[12px] font-medium divide-x ${ContainerWidth} m-auto px-10`}
      >
        <footer
          className={`text-sm md:flex gap-5 lg:divide-x divide-[#557798] lg:space-x-5 justify-between`}
        >
          <div className="">
            <div className="flex flex-col space-y-2 font-normal">
              <FooterTitle title="Corporate Headquarters" />

              <p className="text-white text-md font-normal">
                1st Floor, K.R. Ahamed Sha office complex,
                <br />
                No. 25, Dr. Radhakrishnan Salai, Mylapore,
                <br />
                Chennai - 600 004, Tamil Nadu, India.
              </p>

              <FooterTitle title="Get in touch" />
              <a
                href="mailto:info@synergysbs.com"
                className="bg-[#F58634] text-white font-light text-center p-1 text-lg mt-10 block mb-10 flex items-center gap-3 justify-center"
              >
                <Image
                  width="18"
                  height="5"
                  src="/assets/mail.png"
                  alt=""
                  title=""
                />{" "}
                info@synergysbs.com
              </a>

              <div className="flex gap-6 pt-2 items-center">
                <Link
                  href="https://www.facebook.com/SynergysbsEducation"
                  target="_blank"
                >
                  <Image
                    src={"/assets/social/Path-63.png"}
                    alt="facebook"
                    width={30}
                    height={20}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/synergy_sbs/"
                  target="_blank"
                >
                  <Image
                    src={"/assets/social/Group-47518.png"}
                    alt="ig"
                    width={30}
                    height={20}
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/@synergysbs4833"
                  target="_blank"
                >
                  <Image
                    src={"/assets/social/Group-52076.png"}
                    alt="pr"
                    width={30}
                    height={20}
                  />
                </Link>
                <Link href="https://twitter.com/_SynergySBS" target="_blank">
                  <FaSquareXTwitter size={30} />
                </Link>
                <Link
                  href="https://www.linkedin.com/school/synergy-school-of-business-skills/"
                  target="_blank"
                >
                  <Image
                    src={"/assets/social/LinkedIn.png"}
                    alt="tw"
                    width={30}
                    height={20}
                  />
                </Link>
                <Link
                  href="https://in.pinterest.com/synergysbs/"
                  target="_blank"
                >
                  <FaPinterest size={30} />
                </Link>
              </div>

              {/* {footerLinks4.map((values) => (
                <p>{values.title}</p>
              ))} */}
            </div>
          </div>

          <div className="lg:mt-0 mt-6 lg:pl-10">
            <div className="flex flex-col space-y-3 font-light ">
              <FooterTitle title="Quick Links" />

              {footerLinks1.map((values : any) => (
                <Link
                  href={values.href}
                  className="text-white hover:text-[#F58634] "
                  target={values.next &&  "_blank"}
                >
                  {values.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:mt-0 mt-6 lg:pl-10">
            <div className="flex flex-col space-y-3 font-light ">
              <FooterTitle title="Top Courses" />
              {footerLinks2.map((values) => (
                <Link
                  href={values.href}
                  className="text-white hover:text-[#F58634] "
                >
                  {values.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:mt-0 mt-6 lg:pl-10">
            <div className="flex flex-col space-y-3 font-light ">
              <FooterTitle title="Certification Prep Courses" />
              {footerLinks3.map((values) => (
                <Link
                  href={values.href}
                  className="text-white hover:text-[#F58634] "
                >
                  {values.title}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>

      <div className={ContainerWidth}>
        <div className="flex lg:flex-row flex-col gap-5 lg:justify-end justify-center my-8">
          <Image
            width="80"
            height="80"
            className="bg-white p-2 w-[180px]"
            src="/assets/footer/pm.png"
            alt=""
            title=""
          />
          <Image
            width="113"
            height="100"
            className="bg-white p-2 w-[135px]"
            src="/assets/footer/oracle.png"
            alt=""
            title=""
          />
          <Image
            width="93"
            height="100"
            className="bg-white p-2 w-[120px]"
            src="/assets/footer/scrum.png"
            alt=""
            title=""
          />
          <Image
            width="208"
            height="100"
            className="bg-white p-2 w-[260px]"
            src="/assets/footer/synergy.png"
            alt=""
            title=""
          />
        </div>
      </div>

      <div className="border-t border-[#557798] bordered pt-2">
        <div
          className={
            ContainerWidth +
            " lg:flex gap-5 justify-between my-2 items-center text-white"
          }
        >
          <div className="text-white font-light text-xs lg:mt-0 mt-5 lg:w-[45%]">
          The PMI, PMP, ACP, CAPM, PMBOK are registered marks of the Project Management Institute, Inc. The PMI Authorised Training Partner Logo is a registered mark of the Project Management Institute, Inc. The PMI logo is a registered mark of the Project Management Institute, Inc.
          </div>

          <div className="flex divide-x lg:gap-5 gap-2 lg:text-sm text-xs lg:mt-0 mt-6">
            <p>© Synergy 2024, All rights reserved</p>
            <Link className="lg:pl-5 pl-2" href="/privacy_policy/">
            Privacy Policy
            </Link>
            <Link className="lg:pl-5 pl-2" href="/TermsCondition/">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
