function createLocalState(state = {}, onUpdate) {
  const getState = () => state;

  const update = (updates) => {
    state = { ...state, ...updates };
    onUpdate && onUpdate(state);
  };

  return {
    getState,
    update,
  };
}

export default createLocalState;
