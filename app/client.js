
    import Reflex from '@web-native-js/reflex';
    import Router from '@web-native-js/cui/src/app/routing/Router.js';
    import Chtml from '@web-native-js/cui/src/chtml/Chtml.js';
    import Route from './Route.js';
    import Registry from '@web-native-js/cui/src/Registry.js';
    import globalParams from '@web-native-js/cui/src/params.js';
    import {
        Timeline,
        Translate,
        ResizeObserver,
        IntersectionObserver,
        ProximityObserver,
    } from '@web-native-js/cui/src/app/ui/index.js';
    import Collection from '@web-native-js/cui/src/app/Collection.js';
   
	globalParams.env = {
        env: 'browser',
        Registry
    };
	
    Registry.register('Router', Router, true);
    Registry.register('Timeline', () => new Timeline, true);
    Registry.register('Translate', () => new Translate, true);
    Registry.register('IntersectionObserver', (target, options = {}) => new IntersectionObserver(target || document.body, options), 'auto');
    Registry.register('ProximityObserver', target => new ProximityObserver(target || document.body), 'auto');
    Registry.register('ResizeObserver', target => new ResizeObserver(target || document.body), 'auto');

    Registry.register('console', () => console, true);
    Registry.register('window', () => window, true);

    var engr = [
      {
        label: 'CHTML',
        desc: 'The pure HTML-based, UI Functional Design System (FDS). <br /><br /><i>Introducing the adaptive design system that simplifies your app development process!</i>',
        link: 'https://docs.web-native.dev/chtml/',
        //page: '/chtml/',
        cta: 'DOCS'
      },
      {
        label: 'Reflex',
        desc: 'A general-purpose reflection API for observing any JavaScript object. <br /><br /><i>Meet your new Object.observe()!</i>',
        link: 'https://docs.web-native.dev/reflex/',
        cta: 'DOCS'
      },
      {
        label: 'JSEN',
        desc: 'The general-purpose JavaScript Expression Notation - for running JavaScript in user-defined scopes. <br /><br /><i>Introducing "scoped-JS"!</i>',
        link: 'https://docs.web-native.dev/jsen/',
        cta: 'DOCS'
      },
      {
        label: 'Commons',
        desc: 'A thoughtful utilities library for JavaScript.',
        link: 'https://docs.web-native.dev/commons/',
        cta: 'DOCS'
      },
    ];
    var evan = [
      {},
      {},
      {},
      {
        meta: {type: 'article'},
        label: 'I’m joining web-native!', 
        desc: 'Hey, Awesome! I am pleased to announce that I am joining Web-native as a Front-end Engineer and Developer Relations!🎉', 
        link: 'https://medium.com/@raymondosy1/im-joining-web-native-c98b2cdc5540',
        cta: 'Read article',
        authors: [{
          name: 'Raymond Akalonu',
          avatar: 'https://miro.medium.com/fit/c/48/48/0*dx5wDBZDIOiMILkr.',
          link: 'https://miro.medium.com/@raymondosy1',
        },],
      },
    ];

    var app = new Route({
        active: true,
        title:'Web-Native Home :: Web-Native',
        page: {
            title:'Finally, a Web-Native UI Framework!',
            engineeringSection: engr,
            evangelismSection: evan,
        },
        subroutes: Route.createRoutes({
            chtml: {
                title:'CHTML - a Web-Native UI Framework :: Web-Native',
                page: {
                    title:'Finally, a Web-Native UI Framework!',
                },
            },
            reflex: {
                title: 'Reflex - a reactivity library :: Web-Native',
                page: {
                    title:'This is Reflex page!',
                },
            },
            jsen: {
                title: 'JavaScript Object Notation (JSEN) :: Web-Native',
                page: {
                    title:'This is JSEN page!',
                },
            },
		}),
		/**
		*/
    });
    
	Chtml.ready(() => {
        globalParams.env.pageTitle = document.querySelector('title');
        app.route(0);
        Chtml.from('#app').bind(app);
	});
	