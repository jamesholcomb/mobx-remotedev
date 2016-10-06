import { reaction, action, observable } from 'mobx';
import remotedev from 'mobx-remotedev/lib/dev';

class CounterStore {
  @observable counter = 0;
  @observable total = 0;

  constructor() {
    reaction(() => this.counter, this.increaseTotal);
  }

  @action increaseTotal = () => {
    this.total++;
  }

  @action increase = () => {
    this.counter++;
  }

  @action decrease = () => {
    this.counter--;
  }
}

export default remotedev(CounterStore, { remote: true, global: true, shouldStringify: true });