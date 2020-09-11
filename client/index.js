
/**
 * @imports
 */
import _isObject from '@onephrase/util/js/isObject.js';
import '@onephrase/play-ui/src/browser-entry.js';
import WebMonetization from '@onephrase/observable-webmonetization';
import data from '../data/home.js';
import '../chtml/custom-elements.js';

/**
 * The "/" route handler.
 * 
 * @param object    request 
 * @param any       recieved 
 * @param function  next 
 * 
 * @return object
 */
export default async function(request, recieved, next) {

	var response;
	if (next.path) {
		response = await next();            
	} else {
		response = {
			title:'Web-Native Home :: Web-Native',
			main: data,
		};
	}

	if (_isObject(response)) {
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
		return {
			location:request.url,
			route:response,
			$:window.WebNative.PlayUI,
			monetization:WebMonetization.init('$ilp.uphold.com/g7MhU9HPWgzy', {prompt: true}),
			console:console,
		};
	}
	return {
		location:request.url,
		route:response,
	};
};