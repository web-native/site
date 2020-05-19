
	import * as path from 'path';
	import Bundler from '@web-native-js/chtml/src/html-transport/Bundler.js';
	import ENV from '@web-native-js/chtml/src/html-transport/ENV.js';
	
	console.info('----------------------------------');
	console.info('Building chtml bundles to /public/main.html');
	console.info('----------------------------------');
	Bundler.bundle(path.dirname(import.meta.url).replace('file:///', ''), '../public/main.html', {
		namespaceKey: ENV.params.namespaceAttribute,
	});