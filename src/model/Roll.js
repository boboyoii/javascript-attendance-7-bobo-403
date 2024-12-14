import { DAY } from '../constant/Message.js';

class Roll {
  generateRollObject(roll) {
    const [name, dateTime] = roll.split(',');
    const splitDateTime = dateTime.split('-');
    console.log(splitDateTime);
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
}
