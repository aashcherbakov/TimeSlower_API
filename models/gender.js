/**
 * Created by alexandershcherbakov on 1/21/17.
 */
const Gender = {
  MALE: 0,
  FEMALE: 1,

  /**
   * Checks if gender argument is valid by converting it to enum value.
   * @param gender Number.
   * @returns {boolean}
   */
  isValid(gender) {
    return gender !== undefined && gender >= this.MALE && gender <= this.FEMALE;
  }
};

module.exports = Gender;