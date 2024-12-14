import { Console, DateTimes } from '@woowacourse/mission-utils';
import Roll from '../model/Roll.js';
import retry from '../retry.js';
import UserInput from '../view/UserInput.js';
import { DAY } from '../constant/Message.js';
import Validator from './Validator.js';

class Manager {
  #roll;
  #userInput;
  #validator;

  constructor() {
    this.#roll = new Roll();
    this.#userInput = new UserInput();
    this.#validator = new Validator();
  }

  async attendance() {
    try {
      const today = DateTimes.now();
      const month = today.getMonth() + 1;
      const date = today.getDate();
      this.#validator.validateHoliday(date);
      const day = DAY[date % 7];
      const name = await this.#userInput.inputName();
      this.#validator.validateDupAttendance(name, date);
      const time = await retry(() => this.#userInput.inputTime());
      const state = this.#roll.setState(day, time);
      Console.print(
        `\n${month}월 ${String(date).padStart(
          2,
          '0'
        )}일 ${day}요일 ${name} ${state}\n`
      );
    } catch (error) {
      Console.print(error.message + '\n');
    }
  }
}

export default Manager;
