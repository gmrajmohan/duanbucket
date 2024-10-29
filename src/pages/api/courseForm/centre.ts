import axios from 'axios';
export default async function GetCenter(url :string , GetCenterList :any, DistictId : any) {

  let data = JSON.stringify({
    // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNzc1LCJpYXQiOjE2NjgxNjg1MDd9.wiO0g79xi9l84sU3IYKQ0Q4QTVATRG8ZPE_0FDlynx4",
    // "master_division_id":4,
    // "master_state_id": DistictId,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NTcxOTc0ODV9.v86lyaBkj2j20SODCX_cgB2mQ-eGQtJhlRwGcdsuw3A",
    "master_district_id": Number(DistictId),
    "master_division_id": 1

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
  
  });
  
  }