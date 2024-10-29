
import H1 from "@/components/Typograph/h1";
import { TypoFontVariant } from "@/components/Typograph/fonts";
import { useState } from "react";


const VirtualContent = (centre: any) =>{
    
    const [successMsg,setsuccessMsg] = useState<string>();
    const [successStatus ,setsuccessStatus] = useState<number>();
    const HandleSuccess = (msg :string ,status : number )=>{
        setsuccessMsg(msg);
        setsuccessStatus(status)
    }
  
return (
    <>

<div className="lg:max-w-max content-wrapper">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20">
                {/* Left Content */}
                <div className="w-full cabinet_regular stream-content text-md">
                  
                    <H1 type={TypoFontVariant.barlow_semi_consextrbold} content={ centre &&  centre.centre && centre.centre.map((value : any)=>"Synergy Courses in "+value.centre_name)} className="inline-block md:pt-10  text-[#303030] text-3xl border-b-2 border-pink-600 pb-2 mb-4"/>
                    <p>Unlock a world of opportunities for learning, networking, and professional growth with Synergy Courses in { centre &&  centre.centre && centre.centre.map((value : any)=> value.centre_name )}. As a division of CADD Centre, Synergy School of Business Skills is India's largest network of management training institutes, offering a diverse range of professional courses designed to equip you with the skills needed to excel in today’s competitive market.</p>

                    <br/>
                    <h3 className={`inline-block leading-relaxed text-3xl barlow_semi_consextrbold`}>Why Choose Synergy?</h3>    
                    <ul>
                        <li>70+ Locations across India</li>
                        <li>30+ Professional Courses</li>
                        <li>50K+ Alumni</li>
                        <li>3000+ PMP Trained Students</li>
                        <li>PMI Authorized Training Partner</li>
                    </ul>

                    <h3 className={`inline-block leading-relaxed text-3xl barlow_semi_consextrbold`}>Our Courses </h3>  
                    <br/>
                    <p className={`inline-block leading-relaxed text-2xl barlow_semi_consextrbold`}> Project Management</p>      
                    <ul>
                        <li>Course on Project Management Concepts</li>
                        <li>Course on Microsoft Project</li>
                        <li>Course on Primavera Project Management</li>
                        <li>Course on Primavera Application Administration</li>
                        <li>Course on Primavera Scheduling Professional</li>
                        <li>Course on Primavera Tracking Professional</li>
                        <li>Agile with Jira</li>
                        <li>Course on Scrum Master</li>
                    </ul>
                    <br/>
                    <p className={`inline-block leading-relaxed text-2xl barlow_semi_consextrbold`}> Office Automation</p>      
                    <ul>
                        <li>Certificate Course on MS Word</li>
                        <li>Certificate Course on MS Excel</li>
                        <li>Certificate Course on MS PowerPoint</li>
                        <li>Proficient in Advanced Excel</li>
                    </ul>
                    <br/>
                    <p className={`inline-block leading-relaxed text-2xl barlow_semi_consextrbold`}> Digital Marketing</p>      
                    <ul>
                        <li>Essential in Digital Marketing</li>
                        <li>Essential in Facebook & Insta Pro</li>
                        <li>Essential in GMB Listing Masters</li>
                    </ul>
                    <br/>
                    <p className={`inline-block leading-relaxed text-2xl barlow_semi_consextrbold`}> Business Accounting</p>      
                    <ul>
                        <li>Essential in Business Accounting and Taxation</li>
                        <li>Expert Certificate in Power BI</li>
                        <li>Expert in Tally Prime</li>
                    </ul>
                    <br/>
                    <p className={`inline-block leading-relaxed text-2xl barlow_semi_consextrbold`}> ERP Solutions</p>      
                    <ul>
                        <li>SAP S/4HANA Certification program</li>
                    </ul>
                    <br/>
                    <p className={`inline-block leading-relaxed text-2xl barlow_semi_consextrbold`}> Leading Certification Preparation Programs</p>      
                    <ul>
                        <li>CAPM® Certification Training</li>
                        <li>PMP® Certification Training</li>
                        <li>Scrum Certification Training</li>
                    </ul>
                </div>
                {/* Left Content */}

                {/* Right form */}
                <div className="w-full">
                    <div className="bg-[#E5007E] w-full md:p-10 p-5">
                       
                           <h3 className={`inline-block leading-relaxed  ${successStatus != 200 && "underline decoration-white-600" } decoration-1 underline-offset-[18px] text-white text-3xl barlow_semi_consextrbold border-pink-curious `}>{successStatus == 200 ? successMsg :"Enroll now"}</h3>
                        {/* {successStatus != 200 && <VirtualForm centerDetails={centre && centre} HandleSuccess={HandleSuccess}/> } */}
                    </div>
                    
                </div>
                {/* Right form */}
            </div>
        </div>


        <style jsx>

{`
.content-wrapper
{
    margin:0px 0px 50px 100px;
}
.title-border
{
    text-decoration: underline;
    text-underline-offset: 0.1rem;
    text-decoration-color: #e21b63;
    text-underline-offset: 1rem;
}

@media (max-width: 480px) {
    .content-wrapper
    {
      padding: 20px !important;
      margin:10px;
    }
    }
`}
</style>

    </>
)
}
export default VirtualContent;
