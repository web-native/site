
/**
 * @imports
 */
import _isObject from '@web-native-js/commons/js/isObject.js';
import data from '../data/home.js';

/**
 * The "/" route handler.
 * 
 * @param object    request 
 * @param any       recieved 
 * @param function  next 
 * 
 * @return object
 */
export default async (request, recieved, next) => {

    var response;
    if (next.path) {
        response = await next();
    } else {
        response = {
            title: 'Welcome Web-Native!',
            main: data,
        };
    }

    if (_isObject(response) && !response.static && !request.headers.json) {
        return await createBinding(request, response);
    }

    return response;
};

/**
 * Creates the binding
 */
var initializedState;
async function createBinding(request, response) {
    if (!initializedState) {
        initializedState = true;
        const {default: $, ENV } = await import('@web-native-js/play-ui');
        ENV.window = window; $.INIT();
        return {
            location:request.url,
            route:response,
            $,
        };
    }
    return {
        location:request.url,
        route:response,
    };
};