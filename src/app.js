import { subscribe } from './store.js';
import { createFormWrapper } from './components/createFormWrapper.js';

export function app(parent) {
  createFormWrapper(parent);

  // show state changes in the console
  subscribe((state) => console.log(state));
}
