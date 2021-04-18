import { subscribe } from '../store.js';

export function createTextField(parent) {
  const elem = document.createElement('div');
  parent.appendChild(elem);

  subscribe((state) => {
    const { input } = state;
    elem.textContent = input;
  });
}
