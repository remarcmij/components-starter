import createElement from '../lib/createElement.js';
import store from '../store.js';

function TextField(parent) {
  const p = createElement(parent, { use: 'p' });

  store.subscribe((state) => {
    const { input } = state;
    p.textContent = input;
  });
}

export default TextField;
