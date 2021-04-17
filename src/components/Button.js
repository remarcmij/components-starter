import createComponent from '../lib/createComponent.js';

function Button(parent, props) {
  const { onClick } = props;
  const button = createComponent(parent, {
    tag: 'button',
    type: 'button',
    text: 'Submit',
  });
  button.addEventListener('click', onClick);
}

export default Button;
