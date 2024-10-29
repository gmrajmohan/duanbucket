import axios from "axios";
export default async function GetDistrict(
  url: any,
  setState: any,
  StateId: any
) {
  let data = JSON.stringify({
    brand_id: 3,
    state_id: StateId,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      setState(response.data.data);
    })
    .catch((error) => {
      setState(error);
    });
}

// ------------------------------------------------------------------- //
