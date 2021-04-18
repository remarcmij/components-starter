export function createHeader(parent, props) {
  const { title } = props;
  const elem = document.createElement('p');
  elem.textContent = title;
  parent.appendChild(elem);
  return elem;
}
