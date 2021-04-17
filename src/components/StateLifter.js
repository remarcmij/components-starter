import store from '../store.js';
import createLocalState from '../lib/createLocalState.js';
import Input from './Input.js';
import Button from './Button.js';

function StateLifter(parent) {
  const localState = createLocalState({}, (state) => {
    console.log('User is typing', state);
  });
  const onInput = (value) => localState.update({ input: value });
  const onClick = () => store.updateState(localState.getState());

  Input(parent, { onInput });
  Button(parent, { onClick });
}

export default StateLifter;
