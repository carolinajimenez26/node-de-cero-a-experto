const argv = require('./config/yargs').argv;
const localization = require('./localization/localization');
const weather = require('./weather/weather');

let getInfo = async (address) => {
  try {
    let localization_data = await localization.getData(address);
    let weather_data = await weather.getData(localization_data.lat, localization_data.lng);
    return `Weather in ${localization_data.address} is ${weather_data} Kelvin`;
  } catch (e) {
    return `Couldn't find the weather in ${address}`;
  }
};

getInfo(argv.address).then((resp) => {
  console.log(resp);
}).catch((err) => console.log(err));
