import React from "react";
import Heading from "@/components/Heading";
import { ContainerWidth } from "@/utils/width";
import { IoIosArrowForward } from "react-icons/io";
export default function Content() {
  return (
    <div className={ContainerWidth}>
      <div>
        <Heading type={23} content="Privacy Policy" />
        <div>
          <div className="flex justify-between gap-4 items-center">
            
            <p className="font-medium">
            Synergy considers the security and protection of your personal data and information important. Therefore, Synergy operates its website in compliance with applicable laws on data privacy protection and data security.
            </p>
          </div>
          <div className="flex justify-between items-center mt-6">
            
            <p className="font-medium">
            Below, we provide information on the types of data we collect through Synergy websites, the purpose we use such data, and parties with which we share such data, where applicable.
            </p>
          </div>
        </div>
        <Heading type={20   } content="Collected Data and Purpose of Processing" />
        <div className="flex  gap-4 items-center">
         
          <p className="font-medium">
          We only collect personal data (e.g. Names, Country, Location, Telephone/ Mobile, Email ID, etc.) with regard to operating our website only when you voluntarily provided this data to us (e.g. through registration, contact inquiries, surveys, etc.) and we are entitled to use or process such data by virtue of permission granted by you on the basis of statutory provision.
          </p>

          <p className="font-medium">
          As a general rule, we only use such data exclusively for the purpose for which the data was disclosed to us by you, such as to answer your inquiries, grant you access, process your orders, etc.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Heading type={20} content="Data Sharing" />
        <p className="font-medium">
        For the purpose indicated above, insofar, as you have provided your consent, or when we are legally entitled to do so, we will share your personal data with the subsidiaries of Synergy, wherever required.
          <br />
          <br />
          Data is shared only in compliance with the applicable laws and regulations. We do not sell or otherwise market your personal data to third parties.
        
        </p>
      
  
      </div>

      <div className="mt-10 mb-10">
        <Heading type={20} content="Questions, Comments and Amendments" />

        <div className="flex  gap-4 items-center mt-4">
        
          <p className="font-medium">
          Synergy will respond to all the legitimate requests for information, and wherever applicable to correct, amend or delete your personal data. If you wish to make such a request or if you have questions or comments about this Data Privacy Policy, please click on “Contact Us” and feel free to share..
          </p>
        </div>
        <div className="flex  gap-4 items-center mt-4">
         
          <p className="font-medium">
          This Data Privacy policy is updated on a regular basis. You will find the date of the last update on this page.
          </p>
        </div>
      
      </div>

     
    </div>
  );
}
