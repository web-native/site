
import Chtml, {Reflex, ENV} from '@web-native-js/chtml';
import {Registry} from '@web-native-js/observables';
import CE from './custom-elements.js';
import Route from './Route';
import data from './data.js';

var app = new Route({
    active: true,
    title:'Web-Native Home :: Web-Native',
    page: {
        title:'Finally, a Web-Native UI Framework!',
        engineeringSection: data.engr,
        evangelismSection: data.evan,
    },
    subroutes: Route.createRoutes({
        about: {
            title: 'About Web-Native',
            page: {
                title: 'Finally, a Web-Native UI Framework!',
            },
        },
    }),
});

ENV.ScopedJS.globals = {
    $: window.WebNative.Firedom,
    document: document,
    console: console,
    alert: alert.bind(window),
    prompt: prompt.bind(window),
    confirm: confirm.bind(window),
    monetization: Registry.create('Monetization'),
    router: Registry.create('Router'),
};
Chtml.init(window);
CE(window);
Chtml.ready(() => {
    var appElement = window.document.querySelector('#app');
    Reflex.observe(appElement, (a, b, e) => {
        //console.log(e.originatingFields);
    }, {observeDown: true});
    Reflex.observe(app, (a, b, e) => {
        //console.log(e.originatingFields);
        //console.log(app.current.active);
    }, {observeDown: true});
    app.route(0);
    appElement.bind(app);
});
	