import store from '../store/store.js';
import Input from './Input.js';
import Button from './Button.js';

function StateLifter(parent) {
  const localState = {};

  const onInput = (value) => {
    localState.value = value;
  };

  const onClick = () => store.updateState({ input: localState.value });

  Input(parent, { onInput });
  Button(parent, { onClick });
}

export default StateLifter;
