/**
 * Created by a_shcherbakov on 1/15/17.
 */

module.exports = {
  /**
   * Function used to calculate age of user from given birth date in given date.
   * @param birthday
   * @param date
   * @returns {number}
   */
  calculateAge(birthday, date) {
    let years = date.getFullYear() - birthday.getFullYear();
    const months = date.getMonth() - birthday.getMonth();

    if (months < 0 || months === 0 && date.getDate() < birthday.getDate()) {
      years--;
    }

    return years;
  }

};
