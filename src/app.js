import { subscribe } from './store.js';
import { createCombiWrapper } from './components/createCombiWrapper.js';
import { createFormWrapper } from './components/createFormWrapper.js';

export function app(parent) {
  createCombiWrapper(parent);
  createFormWrapper(parent);

  // show state changes in the console
  subscribe((state) => console.log(state));
}
