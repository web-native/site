
/**
 * @imports
 */
import  'C:/Users/ox_ha/Documents/CODE/onephrase/navigator/node_modules/@web-native-js/chtml/src/browser-entry.js';
import Navigator from 'C:/Users/ox_ha/Documents/CODE/onephrase/navigator/client/modules/Client.js';
import index1 from './about/index.js';
import index2 from './index.js';

/**
 * -----------------
 * App bootstrap file
 * -----------------
 */

// Route definition
const routes = {};
routes['/about'] = index1;
routes['/'] = index2;

// App instance
export const app = new Navigator({
    routes,
    templateRoutePath: 'app/route',
    isomorphic: true,
});