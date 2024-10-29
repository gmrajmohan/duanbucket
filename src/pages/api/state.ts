import axios from 'axios';
export default async function GetStateList(url :any, setState :any) {
let data = JSON.stringify({
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
  .then((response) => {
    setState(response.data.data);
  })
  .catch((error) => {
    setState(error);
  });
  }

// ------------------------------------------------------------------- //

