/**
 * Created by a_shcherbakov on 1/15/17.
 */
const assert = require('assert');
const sut = require('../../models/age_estimator');

describe('Life length estimator', () => {

  it('should do something when country is not on the list', () => {
    assert(sut.maxAgeFor('Krakozhia') == null);
  });

  it('should find male age for country', () => {
    assert(sut.maxAgeFor('Ukraine', 0) == 65.73);
  });

  it('should find female age for country', () => {
    assert(sut.maxAgeFor('Egypt', 1) == 73.05);
  });

  it('should account for invalid gender argument', () => {
    assert(sut.maxAgeFor('Egypt', 3) == 70.84);
  });

});
