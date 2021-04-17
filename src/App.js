import store from './store/store.js';
import { setInput } from './store/actions.js';
import Input from './components/Input.js';
import Button from './components/Button.js';
import TextField from './components/TextField.js';

function App(parent) {
  const state = {};

  const onInput = (value) => {
    state.value = value;
  };

  const onClick = () => setInput(state.value);

  Input(parent, { onInput });

  Button(parent, { onClick });

  TextField(parent);

  // show state changes in the console
  store.subscribe((state) => console.log(state));
}

window.addEventListener('load', () => {
  const root = document.getElementById('root');
  App(root);
});
