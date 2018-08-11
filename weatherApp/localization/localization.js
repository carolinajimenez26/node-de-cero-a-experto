const axios = require('axios');

const getData = async (req_address) => {
  let encodedUrl = encodeURI(req_address);

  let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);

  if (resp.data.status === 'ZERO_RESULTS') {
    throw new Error(`Not results for ${req_address}`);
  }

  // console.log(JSON.stringify(resp.data, undefined, 2));
  let results = resp.data.results[0];
  let address = results.formatted_address;
  let lat = results.geometry.location.lat;
  let lng = results.geometry.location.lng;
  return {
    address,
    lat,
    lng
  };

};

module.exports = {
  getData
}
