# Component-based Framework Starter Project

This repository can be used as a starter project for building a plain vanilla
JavaScript single-page web app. It provides a couple of library files (in the
`lib` folder) that together can be considered to form a mini-framework.

## Contents of the `lib` folder

### File: createComponent.js

```js
function createComponent(parent, props = {})
```

This function creates an HTML element (by default a `div`) and appends it to
a `parent` HTML element.

The optional `props` argument can be used to specify the type of the HTML
element to create (overriding the default of `div`) and any attributes to
add to the element.

If a `text` property is provided it is used to set the `textContent` of the
element rather than setting an attribute value.

The function returns the newly created element.

Example:

```js
 const p = createComponent(parent, { tag: 'p', text: 'Hello world! });
```

### File: clearComponent.js

This function simply removes all child nodes from an element.

```js
function clearComponent(element)
```

### File: createStore.js

Creates an global store to which components can send updates by calling
`store.updateState()` and/or receive state updates by calling `store.subscribe()`.

To create a store, call the `createStore()` function and pass an object
representing the initial state as an argument.

Example:

```js
import createStore from './lib/createStore.js';

const initialState = {
  input: '',
};

export default createStore(initialState);
```

### File: createLocalState.js

Create an observable local state object. See the `StateLifter` component for an example.

````js
function createLocalState(state = {}, onUpdate)
```

## Components

Components in this mini-framework are simply JavaScript functions with the
following prescribed signature:

```js
function MyComponent(parent[, props])
````

The `parent` parameter represents a parent HTML element to which this component
should be appended. The optional `props` parameter is a JavaScript object that
can be used to pass 'props' to the component.

Following the React convention, component functions should start with an uppercase
letter (i.e., Pascal case).

Components can be nested.

It is recommended to place components in a `components` folder.

Example:

```js
function Button(parent, props) {
  const { onClick } = props;
  const button = createComponent(parent, {
    tag: 'button',
    type: 'button',
    text: 'Submit',
  });
  button.addEventListener('click', onClick);
}
```

For further details, please review the starter code provided in this repo.
