import React from "react";
import Heading from "@/components/Heading";
import { ContainerWidth } from "@/utils/width";
import { IoIosArrowForward } from "react-icons/io";
export default function Content() {
  return (
    <div className={ContainerWidth}>
      <div>
        <Heading type={23} content="Terms of Use" />
        <Heading type={20} content="Scope" />
        <div>
          <div className="flex justify-between gap-4 items-center">
            <div className="w-10 h-10 flex items-center">
              <IoIosArrowForward size={20} />
            </div>
            <p className="font-medium">
              Any use of websites by the CADD Centre Training Services Pvt. Ltd.
              Or its affiliates- DreamZone, Synergy, Livewire, CCUBE, IID,
              Skillease, OneChannel, CADD at School and DreamFlower, is subject
              to these terms of use. These Terms of Use can be amended, modified
              or replaced by other terms and conditions, e.g. in the case of new
              courses and certifications.
            </p>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="w-10 h-10 flex items-center">
              <IoIosArrowForward size={20} />
            </div>
            <p className="font-medium">
              In the case of web offers aimed at companies or public
              enterprises, such organizations are represented by the user and
              must assume that the user has appropriate knowledge and acts
              accordingly.
            </p>
          </div>
        </div>
        <Heading type={20   } content="Services" />
        <div className="flex  gap-4 items-center">
          <div className="flex items-center">
            <IoIosArrowForward size={20} />
          </div>
          <p className="font-medium">
            Synergy website contains specific information or documentation for
            viewing or downloading.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Heading type={20} content="Registration and Password" />
        <p className="font-medium">
          The user shall provide accurate information during the registration
          process and shall update as this information changes over time without
          any delay.
          <br />
          <br />
          The user should ensure that the User Data is not accessible by any
          third party.
          <br />
          <br />
          Synergy reserves the right to deny registration and is entitled to,
          any time, and without obligation to give reasons, to deny the users
          the right to access the password protected area by blocking its User
          Data, if the user, in particular
        </p>
        <div className="flex  gap-4 items-center mt-4">
          <div className="flex items-center">
            <IoIosArrowForward size={20} />
          </div>
          <p className="font-medium">
            Uses false data or inaccurate information during registration.
          </p>
        </div>
        <div className="flex  gap-4 items-center mt-4">
          <div className="flex items-center">
            <IoIosArrowForward size={20} />
          </div>
          <p className="font-medium">
            Violates the Terms of Use or any applicable laws or neglects its
            duty of care with regard to User Data.
          </p>
        </div>
        <div className="flex  gap-4 items-center mt-4">
          <div className="flex items-center">
            <IoIosArrowForward size={20} />
          </div>
          <p className="font-medium">
            Did not use the Synergy website for a longer period.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Heading type={20} content="Right to Use of information" />

        <div className="flex  gap-4 items-center mt-4">
          <div className="flex items-center">
            <IoIosArrowForward size={20} />
          </div>
          <p className="font-medium">
            The use of any information made available via the Synergy website is
            subject to the Terms of Use or license terms previously agreed to
            with Synergy.
          </p>
        </div>
        <div className="flex  gap-4 items-center mt-4">
          <div className="flex items-center">
            <IoIosArrowForward size={20} />
          </div>
          <p className="font-medium">
            Information or documentation should not be distributed or rented by
            the User to any third party at any time.
          </p>
        </div>
        <div className="flex  gap-4 items-center mt-4">
          <div className="flex items-center">
            <IoIosArrowForward size={20} />
          </div>
          <p className="font-medium">
            The information and documentation are protected by copyright laws as
            well as international copyright treaties.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Heading type={20} content="User Duties" />

        <div className="flex  gap-4 items-center mt-4">
          <p className="font-medium">
            While using the Synergy website, the user shall not
          </p>
        </div>
        <div className="flex  gap-4 items-center mt-4">
          <div className="flex items-center">
            <IoIosArrowForward size={20} />
          </div>
          <p className="font-medium">
            Breach public morality in its manner of use.
          </p>
        </div>
        <div className="flex  gap-4 items-center mt-4">
          <div className="flex items-center">
            <IoIosArrowForward size={20} />
          </div>
          <p className="font-medium">
            Upload any contents containing a virus, so-called Trojan horse.
          </p>
        </div>
        <div className="flex  gap-4 items-center mt-4">
          <div className="flex items-center">
            <IoIosArrowForward size={20} />
          </div>
          <p className="font-medium">
            Violate any intellectual property right.
          </p>
        </div>
        <div className="flex  gap-4 items-center mt-4">
          <div className="flex items-center">
            <IoIosArrowForward size={20} />
          </div>
          <p className="font-medium">
            Distribute unsolicited emails (so called “Spam”) or inaccurate
            warning viruses.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Heading type={20} content="Data Privacy Protection" />

        <div className="mt-4">
          <p className="font-medium">
            For collection, use and processing the personally identifiable data
            of the user of the Synergy website, Synergy shall comply with
            applicable laws on data privacy protection and Synergy Data Privacy
            policy.
          </p>
        </div>
      </div>
      <div className="mt-10 mb-10">
        <Heading
          type={20}
          content="Supplementary Agreements and Applicable Law
"
        />

        <div className="mt-4">
          <p className="font-medium">
            Any supplementary agreement requires a written form.
          </p>
        </div>

        <div className="mt-4">
          <p className="font-medium">
            The individual pages of Synergy website are operated and
            administered by Synergy. All the pages comply with the law
            applicable in the respective countries from where the pages are
            accessed.
          </p>
        </div>
      </div>
    </div>
  );
}
