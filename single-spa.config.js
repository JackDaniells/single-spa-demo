import { registerApplication, start } from 'single-spa'

registerApplication(
  'gateway', 
  () => import('./src/gateway/main.app.js'),
  () => true
);

start();

window.addEventListener('load', () => {
  console.log('OK!')

  registerApplication(
    'vue', 
    () => import('./src/vue/vue.app.js'),
    () => location.pathname === "/react" ? false : true
  );

  registerApplication(
    'react',
    () => import('./src/react/main.app.js'),
    () => location.pathname === "/vue"  ? false : true
  );
})