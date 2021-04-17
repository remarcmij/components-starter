function Store() {
  let state = {
   input: '',
  };

  const listeners = new Set();

  function notify(state) {
    listeners.forEach((listener) => listener(state));
  }

  function getState() {
    return state;
  }

  function updateState(updates) {
    state = { ...state, ...updates };
    notify(state);
  }

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  return { getState, updateState, subscribe };
}

export default Store();
