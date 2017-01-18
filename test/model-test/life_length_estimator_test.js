/**
 * Created by a_shcherbakov on 1/15/17.
 */
const assert = require('assert');
const sut = new require('../../models/life_length_estimator');

describe('Life length estimator', function () {

  it('should provide list of countries', function () {
    const countries = sut.knownCountries();
    assert(countries.length === 201);
    assert(countries[0] === 'Hong Kong');
  });

  it('should provide averageFor life expectancy', function () {
    assert(sut.averageFor('Ukraine') == 70.76);
  });

  it('should do something when country is not on the list', function () {
    assert(sut.averageFor('Krakozhia') == null);
  });

  it('should find male age for country', function () {
    assert(sut.maxAgeFor('Ukraine', 0) == 65.73);
  });

  it('should find female age for country', function () {
    assert(sut.maxAgeFor('Egypt', 1) == 73.05)
  });

  it('should account for invalid gender argument', function () {
    assert(sut.maxAgeFor('Egypt', 3) == null);
  });

});