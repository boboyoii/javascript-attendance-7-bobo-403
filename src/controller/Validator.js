import {
  DAY,
  ERROR_MESSAGE,
  FEATURE_SELECTION,
  HOLIDAY_DATE,
} from '../constant/Message.js';
import Roll from '../model/Roll.js';

class Validator {
  #roll;

  constructor() {
    this.#roll = new Roll();
  }

  validateFeatureSelect(select) {
    if (!FEATURE_SELECTION.includes(select)) {
      throw new Error(ERROR_MESSAGE.invalid__format);
    }
  }

  validateNickName(name) {
    if (!this.#roll.isExistName(name)) {
      throw new Error(ERROR_MESSAGE.invalid_name);
    }
  }

  validateHoliday(date) {
    if (HOLIDAY_DATE.includes(date)) {
      throw new Error(ERROR_MESSAGE.invalid_date(date, DAY[date % 7]));
    }
  }
}

export default Validator;
