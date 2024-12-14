import { Console, DateTimes } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from '../constant/Message.js';
import Validator from '../controller/Validator.js';

class UserInput {
  #validator;
  constructor() {
    this.#validator = new Validator();
  }
  async inputFeatureNum() {
    const today = DateTimes.now();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const featureNum = await Console.readLineAsync(
      PROGRESS_MESSAGE.enter_feature_num(month, date)
    );
    this.#validator.validateFeatureSelect(featureNum);
    return featureNum;
  }
}

export default UserInput;
