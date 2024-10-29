import axios from 'axios';
export default async function GetLocateusCenterDetails(url :string , GetCenterList :any, DistictId : any, centerCode : string) {

  let data = JSON.stringify({
    brand_id: 3,
    centre_code : centerCode
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: url,
    headers: { 
          'Content-Type': 'application/json'
        },
    data : data
  };
  
  axios.request(config)
  .then((response : any) => {
   GetCenterList(response.data.data);
  })
  .catch((error : any) => {
    // console.log(error);
  });
  
  }