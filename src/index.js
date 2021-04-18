import { app } from './app.js';

window.addEventListener('load', () => {
  const root = document.getElementById('root');
  app(root);
});
