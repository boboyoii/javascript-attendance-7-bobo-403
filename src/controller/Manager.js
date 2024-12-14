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
      const name = await retry(() => this.#userInput.inputName());
      this.#validator.validateDupAttendance(name, date);
      const time = await retry(() => this.#userInput.inputTime());
      const state = this.#roll.setState(day, time);
      Console.print(
        `\n${month}월 ${String(date).padStart(
          2,
          '0'
        )}일 ${day}요일 ${time} ${state}\n`
      );
    } catch (error) {
      Console.print(error.message + '\n');
    }
  }

  async editAttendance() {
    try {
      const name = await retry(() => this.#userInput.inputEditName());
      const date = await retry(() => this.#userInput.inputEditDate());
      const time = await retry(() => this.#userInput.inputEditTime(date));
      const day = DAY[date % 7];
      const state = this.#roll.setState(day, time);
      const origin = this.#roll.getOriginAttendance(name, date);
      Console.print(`\n${origin} -> ${time} ${state} 수정 완료!\n`);
    } catch (error) {
      Console.print(error.message + '\n');
    }
  }

  async attendanceRecord() {
    try {
      const name = await retry(() => this.#userInput.inputEditName());
      const records = this.#roll.getAttendanceRecord(name);
      records.forEach((record) => {
        Console.print(record);
      });
    } catch (error) {
      Console.print(error.message + '\n');
    }
  }
}

export default Manager;
