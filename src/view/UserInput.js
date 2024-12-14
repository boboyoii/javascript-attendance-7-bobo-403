import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from '../constant/Message.js';
import Validator from '../controller/Validator.js';

class UserInput {
  #validator;
  constructor() {
    this.#validator = new Validator();
  }
  async inputFeatureNum() {
    const featureNum = await Console.readLineAsync(
      PROGRESS_MESSAGE.enter_feature_num
    );
    this.#validator.validateFeatureSelect(featureNum);
    return featureNum;
  }
}

export default UserInput;
