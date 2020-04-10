
	import * as path from 'path';
	import Bundler from '@web-native-js/cui/src/Bundler.js';
	import globalParams from '@web-native-js/cui/src/params.js';
	
	console.info('----------------------------------');
	console.info('Building chtml bundles to /public/main.html');
	console.info('----------------------------------');
	Bundler.bundle(path.dirname(import.meta.url).replace('file:///', ''), '../public/main.html', {
		namespaceKey:globalParams.attrMap.namespace,
	});