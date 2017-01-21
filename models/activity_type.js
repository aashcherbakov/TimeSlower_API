/**
 * Created by alexandershcherbakov on 1/21/17.
 */
const ActivityType = {
  ROUTINE: 0,
  GOAL: 1,

  /**
   * Checks if given type can be converted to ActivityType enum.
   * @param type Number.
   * @returns {boolean}
   */
  isValid(type) {
    return type >= this.ROUTINE, type <= this.GOAL;
  }

};

module.exports = ActivityType;