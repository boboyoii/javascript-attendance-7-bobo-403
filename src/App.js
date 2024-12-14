import { FEATURE_SELECTION } from './constant/Message.js';
import retry from './retry.js';
import UserInput from './view/UserInput.js';

class App {
  #userInput;

  constructor() {
    this.#userInput = new UserInput();
  }

  async run() {
    let reStart = true;
    do {
      const featureNum = await retry(() => this.#userInput.inputFeatureNum());
      if (featureNum === FEATURE_SELECTION[0]) console.log('출석확인');
      if (featureNum === FEATURE_SELECTION[1]) console.log('출석수정');
      if (featureNum === FEATURE_SELECTION[2]) console.log('출석수정');
      if (featureNum === FEATURE_SELECTION[3]) console.log('출석수정');
      if (featureNum === FEATURE_SELECTION[4]) reStart = false;
    } while (reStart);
  }
}

export default App;
