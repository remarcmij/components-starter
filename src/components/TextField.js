import createComponent from '../lib/createComponent.js';
import store from '../store.js';

function TextField(parent) {
  const container = createComponent(parent);

  store.subscribe((state) => {
    const { input } = state;
    container.textContent = input;
  });
}

export default TextField;
