import createComponent from '../lib/createComponent.js';
import store from '../store.js';

function TextField(parent) {
  const p = createComponent(parent, { tag: 'p' });

  store.subscribe((state) => {
    const { input } = state;
    p.textContent = input;
  });
}

export default TextField;
