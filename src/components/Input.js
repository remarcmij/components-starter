import createComponent from '../lib/createComponent.js';

function Input(parent, props) {
  const { onInput } = props;
  const input = createComponent(parent, { tag: 'input', type: 'text' });
  input.addEventListener('input', (event) => onInput(event.target.value));
}

export default Input;
