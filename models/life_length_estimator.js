/**
 * Created by a_shcherbakov on 1/15/17.
 */
const fs = require('fs');
const Country = require('./country');

const path = './countries_list.txt';
const fullList = fs.readFileSync(path, 'utf8').toString().split('\n');

module.exports = {

  knownCountries() {
    return fullList.map(line => {
      const components = line.split('|');
      return components[0];
    });
  },

  getCountry(name) {
    const index = this.knownCountries().indexOf(name);

    if (index > 0) {
      const data = fullList[index].split('|');
      return new Country(data[0], data[1], data[2], data[3]);
    }
  },

  // TODO: throw error
  averageFor(countryName) {
    const country = this.getCountry(countryName);
    if (country) {
      return country.averageAge;
    }
  },

  // TODO: create enum
  maxAgeFor(countryName, gender) {
    const country = this.getCountry(countryName);
    if (country) {
      if (gender === 0) { // male
        return country.maleAge;
      } else if (gender === 1) { // female
        return country.femaleAge;
      }
    }
  }

};