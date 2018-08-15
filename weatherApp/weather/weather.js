const axios = require('axios');

const getData = async (lat, lng) => {

  // let url = `https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22`;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8189d2742a3cf80be4ea1ae416013a93`;

  let resp = await axios.get(url);

  return resp.data.main.temp;
};

module.exports = {
  getData
}
