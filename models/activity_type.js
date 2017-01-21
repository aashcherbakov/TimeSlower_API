/**
 * Created by alexandershcherbakov on 1/21/17.
 */
const ActivityType = {
  ROUTINE: 0,
  GOAL: 1,

  isValid(type) {
    return type >= this.ROUTINE, type <= this.GOAL;
  }

};

module.exports = ActivityType;