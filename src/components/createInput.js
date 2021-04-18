export function createInput(parent, props) {
  const { onInput } = props;
  const elem = document.createElement('input');
  parent.appendChild(elem);
  elem.type = 'input';
  elem.addEventListener('input', (event) => onInput(event.target.value));
}
