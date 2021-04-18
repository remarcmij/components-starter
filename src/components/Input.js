import createElement from '../lib/createElement.js';

function Input(parent, props) {
  const { onInput } = props;
  const input = createElement(parent, { use: 'input', type: 'text' });
  input.addEventListener('input', (event) => onInput(event.target.value));
}

export default Input;
