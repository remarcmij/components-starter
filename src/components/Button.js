import createElement from '../lib/createElement.js';

function Button(parent, props) {
  const { onClick } = props;
  const button = createElement(parent, {
    use: 'button',
    type: 'button',
    text: 'Submit',
  });
  button.addEventListener('click', onClick);
}

export default Button;
