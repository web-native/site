
/**
 * @imports
 */
import Dotenv from 'dotenv';
import _isObject from '@onephrase/util/js/isObject.js';
import data from '../data/home.js';

/**
 * Config Dotenv
 */
Dotenv.config();

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
        const {default: $, init } = await import('@onephrase/play-ui');
        init({reflow: false}, window);
        return {
            location:request.url,
            monetization:{},
            route:response,
            console:console,
            $,
        };
    }
    return {
        location:request.url,
        route:response,
    };
};