import { setInput } from '../store/actions.js';
import Input from './Input.js';
import Button from './Button.js';

function StateLifter(parent) {
  const state = {};

  const onInput = (value) => {
    state.value = value;
  };

  const onClick = () => setInput(state.value);

  Input(parent, { onInput });
  Button(parent, { onClick });
}

export default StateLifter;
