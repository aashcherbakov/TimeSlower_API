/**
 * Created by a_shcherbakov on 1/15/17.
 */
const fs = require('fs');
const Country = require('./country');
const Gender = require('./gender');

const path = './countries_list.txt';
const fullList = fs.readFileSync(path, 'utf8').toString().split('\n');

module.exports = {

  /**
   * Calculates max age for provided country and gender (if one is being passed).
   * If gender argument is not passed, function will return average age for given country.
   * @param {String} countryName String with country name.
   * @param {Number} gender Number, optional, 0 for male, 1 for female.
   * @returns {*}
   */
  maxAgeFor(countryName, gender) {
    const country = getCountry(countryName);
    if (country) {
      if (Gender.isValid(gender)) {
        return genderSpecificAgeInCountry(country, gender);
      } 
      return country.averageAge;  
    }
  }
};

// Private functions

function knownCountries() {
  return fullList.map(line => {
    const components = line.split('|');
    return components[0];
  });
}

function getCountry(name) {
  const index = knownCountries().indexOf(name);
  if (index > 0) {
    const countryData = fullList[index].split('|');
    return new Country(countryData[0], countryData[1], countryData[2], countryData[3]);
  }
}

function genderSpecificAgeInCountry(country, gender) {
  switch (gender) {
    case Gender.MALE:
      return country.maleAge;
    case Gender.FEMALE:
      return country.femaleAge;
    default: 
      break;
  }
}
