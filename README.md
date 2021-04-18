# Component-based Starter Project

This repository can be used as a starter project for building plain vanilla JavaScript single-page web applications. It encourages specific patterns, naming conventions and code structures for creating a hierarchy of "components". Adherence to these principles can greatly help to cleanly organize your code and keep its complexity manageable.

Components in this sense are simply HTML elements, appended to a parent element, which may have children and event listeners.

## Component creation functions

A component creation function under these rules must adhere to a specific function "signature" (i.e. have a predefined number of parameters with predefined types). Here is the prescribed function signature for such a function:

```js
createXXX(parent[, props])
```

where

- `XXX` is the name of the component to create, e.g. `createHeader`,
- `parent` is the parent HTML element to which this component is to be appended,
- `props` is an optional parameter through which a JavaScript object can be passed,
  containing properties for configuring the component (e.g. attributes, callbacks,
  etc.).

The function can optionally return a reference to its top level HTML element.

Here is an example of a component creation function that creates a Header component:

```js
export function createHeader(parent, props) {
  const { title } = props;
  const elem = document.createElement('p');
  elem.textContent = title;
  parent.appendChild(elem);
  return elem;
}
```

And here is an example of how it might be used:

```js
const onClick = () => {...}

createButton(container, { onClick });
```

A nested HTML structure can be created by nesting component creation functions,
for example:

```js
import { createForm } from './createForm.js';
import { createTextField } from './createTextField.js';
import { createHeader } from './createHeader.js';

export function createFormWrapper(parent) {
  const container = document.createElement('div');
  container.classList.add('container');
  parent.appendChild(container);

  createHeader(container, { title: 'Simple form' });
  createForm(container);
  createTextField(container);
}
```

## Global State Management

The starter project includes a `store.js` file that implements a Publish/Subscribe pattern that was introduced in the homework of JavaScript Week 4. It can be used to communicate application 'state' between the various components that make up the application.

Application state is maintained in a simple JavaScript object inside the store module, called `state`.

Some components may send state updates to the store while other components may receive state updates by subscribing to the store. Or a component may do both.

Here is an example of a component sending state updates through its event handler:

```js
import { updateState } from '../store.js';

export function createForm(parent) {
  const form = document.createElement('form');
  ...
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    ...
    updateState({ input: <some value> });
  });
}
```

And here is an example of a component subscribing to the store:

```js
import { subscribe } from '../store.js';

export function createTextField(parent) {
  const elem = document.createElement('div');
  parent.appendChild(elem);

  subscribe((state) => {
    const { input } = state;
    elem.textContent = input;
  });
}
```

Whenever the Form component calls `updateState` like this, the `input` property from the store's `state` object is updated.

The TextField object receives the updated state object and singles out the `input` property to update its HTML element.

For further details, please inspect the provided starter code.
