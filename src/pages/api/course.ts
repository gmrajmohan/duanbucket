import axios from 'axios';
export default async function GetCoursefunciton(url :any, setState :any) {



  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: url,
    headers: { 
      'Content-Type': 'application/json'
    },
  };
  
  axios.request(config)
  .then((response) => {
    setState(response.data.courseList);
  })
  .catch((error) => {
    setState(error);
  });
  }

// ------------------------------------------------------------------- //

