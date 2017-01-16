/**
 * Created by a_shcherbakov on 1/15/17.
 */
const fs = require('fs');
const path = './countries_list.txt'
const fullList = fs.readFileSync(path, 'utf8').toString().split('\n');

module.exports = {

  knownCountries() {
    return fullList.map(line => {
      const components = line.split('|');
      return components[0];
    });
  },

  // TODO: throw error
  averageFor(country) {
    const index = this.knownCountries().indexOf(country);
    if (index > 0) {
      const line = fullList[index].split('|');
      return line[1];
    }
  }

};