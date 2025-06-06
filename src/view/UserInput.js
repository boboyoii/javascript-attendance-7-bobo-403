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

  async inputName() {
    const name = await Console.readLineAsync(PROGRESS_MESSAGE.enter_name);
    this.#validator.validateNickName(name);
    return name;
  }

  async inputTime() {
    const time = await Console.readLineAsync(PROGRESS_MESSAGE.enter_time);
    const today = DateTimes.now();
    const date = today.getDate();
    this.#validator.validateTime(date, time);
    return time;
  }

  async inputEditName() {
    const name = await Console.readLineAsync(PROGRESS_MESSAGE.enter_edit_name);
    this.#validator.validateNickName(name);
    return name;
  }

  async inputEditDate() {
    const date = await Console.readLineAsync(PROGRESS_MESSAGE.enter_edit_date);
    this.#validator.validateDate(Number(date));
    return Number(date);
  }

  async inputEditTime(date) {
    const time = await Console.readLineAsync(PROGRESS_MESSAGE.enter_edit_time);
    this.#validator.validateTime(date, time);
    return time;
  }
}

export default UserInput;
