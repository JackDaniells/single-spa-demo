import { registerApplication, start } from 'single-spa'
import 'babel-polyfill';



function pathPrefix(prefix) {
    true
    // return location.pathname === prefix
}
registerApplication('navbar', () => import('./src/navbar/navbar.app.js'),() => true);

registerApplication('vue', () => import('./src/vue/vue.app.js'),() => pathPrefix("/vue"));
 
// registerApplication('react', () => import('./src/react/main.app.js'),() =>  pathPrefix("/react"));

start();
