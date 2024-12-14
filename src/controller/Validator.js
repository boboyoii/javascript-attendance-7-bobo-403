import { DateTimes } from '@woowacourse/mission-utils';
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

  validateDate(date) {
    const today = DateTimes.now();
    const todayDate = today.getDate();
    if (Number(todayDate) < date) {
      throw new Error(ERROR_MESSAGE.invalid__format);
    }
  }

  validateTime(date, time) {
    const day = DAY[date % 7];
    const hour = Number(time.split(':')[0]);
    const min = Number(time.split(':')[1]);
    if (day === '월') {
      if (!(hour >= 13 && hour <= 17 && min >= 0 && min <= 59))
        throw new Error(ERROR_MESSAGE.invalid__format);
    }
    if (!(hour >= 10 && hour <= 17 && min >= 0 && min <= 59))
      throw new Error(ERROR_MESSAGE.invalid__format);
  }
}

export default Validator;
