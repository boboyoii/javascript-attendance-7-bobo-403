import { ERROR_MESSAGE, FEATURE_SELECTION } from '../constant/Message';

class Validator {
  validateFeatureSelect(select) {
    if (!FEATURE_SELECTION.includes(select)) {
      throw new Error(ERROR_MESSAGE.invalid__format);
    }
  }
}

export default Validator;
