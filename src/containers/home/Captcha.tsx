import ReCAPTCHA from "react-google-recaptcha";
import { useEffect,useRef,useState} from "react";
import axios from "axios";
interface CaptchaResponce {
    CaptchaResponceFromParent : (data : any) => void
}
const Captcha =({CaptchaResponceFromParent} : CaptchaResponce)=>{
    const [Captcha, CaptchaResponce] = useState<any>("");

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
  
        return () => {
            document.body.removeChild(script);
        };
      }, []);
    
      const recaptchaRef = useRef<any>(null);
      const handleSubmit2 = async (e: any) => {
          const recaptchaValue = recaptchaRef.current.getValue();
          if (recaptchaValue) {
              const responce = axios
                  .get(`https://api-publicsite.caddcentre.com/api/sy_GoogleCaptcha/${recaptchaValue}`)
                  .then((r: any) => CaptchaResponce(r.data.captcha.success))
                  .catch((error) => {
                     
                  });
          } else {
          }
      };
    useEffect(()=>{
        CaptchaResponceFromParent(Captcha)
    },[Captcha])
    return(
        <>
            <div className="mt-4">
                 <ReCAPTCHA sitekey="6LfxMykpAAAAACSDfv5HC4xk0Fm7XbqvJfmz1_Lr" ref={recaptchaRef} onChange={handleSubmit2} />
             </div>
        </>
    )
}
export default Captcha