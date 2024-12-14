import { FEATURE_SELECTION } from './constant/Message.js';
import Manager from './controller/Manager.js';
import retry from './retry.js';
import UserInput from './view/UserInput.js';

class App {
  #userInput;
  #manager;

  constructor() {
    this.#userInput = new UserInput();
    this.#manager = new Manager();
  }

  async run() {
    let reStart = true;
    do {
      const featureNum = await retry(() => this.#userInput.inputFeatureNum());

      if (featureNum === FEATURE_SELECTION[0]) await this.#manager.attendance();
      if (featureNum === FEATURE_SELECTION[1])
        await this.#manager.editAttendance();
      if (featureNum === FEATURE_SELECTION[2])
        await this.#manager.attendanceRecord();
      if (featureNum === FEATURE_SELECTION[3])
        this.#manager.expulsioncCandidate();
      if (featureNum === FEATURE_SELECTION[4]) reStart = false;
    } while (reStart);
  }
}

export default App;
