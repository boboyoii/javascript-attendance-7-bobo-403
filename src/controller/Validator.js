import {
  DAY,
  ERROR_MESSAGE,
  FEATURE_SELECTION,
  HOLIDAY_DATE,
} from '../constant/Message.js';

class Validator {
  validateFeatureSelect(select) {
    if (!FEATURE_SELECTION.includes(select)) {
      throw new Error(ERROR_MESSAGE.invalid__format);
    }
  }

  validateHoliday(date) {
    if (HOLIDAY_DATE.includes(date)) {
      throw new Error(ERROR_MESSAGE.invalid_date(date, DAY[date % 7]));
    }
  }
}

export default Validator;
