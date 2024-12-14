import fs from 'fs';
import { DAY } from '../constant/Message.js';

class Roll {
  #rollList;

  constructor() {
    const file = fs.readFileSync('./public/attendances.csv', 'utf8');
    this.#rollList = this.convertList(file);
  }

  convertList(file) {
    const contents = file.split(/\r?\n/).slice(1, -1);
    return contents.map((content) => {
      return this.generateRollObject(content);
    });
  }

  generateRollObject(roll) {
    const [name, dateTime] = roll.split(',');
    const splitDateTime = dateTime.split('-');
    const day = DAY[splitDateTime[2].split(' ')[0] % 7];
    const time = splitDateTime[2].split(' ')[1];
    return {
      name: name,
      month: splitDateTime[0],
      date: splitDateTime[2].split(' ')[0],
      day: day,
      time: time,
      state: this.setState(day, time),
    };
  }

  setState(day, time) {
    const hour = Number(time.split(':')[0]);
    const min = Number(time.split(':')[1]);
    if (day === '월') {
      if (hour >= 13 && min > 5) return '(지각)';
      if (hour >= 13 && min > 30) return '(결석)';
      return '(출석)';
    }
    if (hour >= 10 && min > 5) return '(지각)';
    if (hour >= 10 && min > 30) return '(결석)';
    return '(출석)';
  }

  isExistName(name) {
    const names = new Set(this.#rollList.map((roll) => roll.name));
    if (names.has(name)) return true;
    return false;
  }
}

export default Roll;
