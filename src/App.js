import store from './store.js';
import StateLifter from './components/StateLifter.js';
import Form from './components/Form.js';
import TextField from './components/TextField.js';

function App(parent) {
  StateLifter(parent);

  Form(parent);

  TextField(parent);

  // show state changes in the console
  store.subscribe((state) => console.log(state));
}

export default App;
