import store from './store.js';

export function setInput(value) {
  store.updateState({ input: value });
}
