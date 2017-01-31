/**
 * Created by a_shcherbakov on 1/15/17.
 */
const assert = require('assert');
const sut = require('../../models/date_calculator');

describe('Date calculator', () => {
  it('should calculate age from given date', () => {
    const birthday = new Date('March 28, 1987');
    const currentDate = new Date('January 28, 2017');
    assert(sut.calculateAge(birthday, currentDate) === 29);
  });
});
