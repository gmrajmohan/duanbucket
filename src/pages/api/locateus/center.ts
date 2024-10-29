import axios from 'axios';
export default async function GetLocateusCenterList(url :string , GetCenterList :any, DistictId : any) {

  let data = JSON.stringify({
    district_id: DistictId,
    brand_id: 3,
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