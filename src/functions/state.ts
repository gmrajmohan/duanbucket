import axios from 'axios';
export default async function GetStatefunciton(url :any, setState :any) {
let data = JSON.stringify({
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNzc1LCJpYXQiOjE2NjgxNjg1MDd9.wiO0g79xi9l84sU3IYKQ0Q4QTVATRG8ZPE_0FDlynx4",
    "master_country_id": 101,
    "master_division_id": 3
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
  .then((response) => {
    setState(response.data.data);
  })
  .catch((error) => {
    setState(error);
  });
  }

// ------------------------------------------------------------------- //

