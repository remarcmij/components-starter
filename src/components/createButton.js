export function createButton(parent, props) {
  const { onClick } = props;
  const elem = document.createElement('button');
  parent.appendChild(elem);
  elem.type = 'button';
  elem.textContent = 'Submit';
  elem.addEventListener('click', onClick);
  return elem;
}
