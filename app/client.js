
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
    Registry.register('IntersectionObserver', target => new IntersectionObserver(target || document.body), 'auto');
    Registry.register('ProximityObserver', target => new ProximityObserver(target || document.body), 'auto');
    Registry.register('ResizeObserver', target => new ResizeObserver(target || document.body), 'auto');

    Registry.register('console', () => console, true);
    Registry.register('window', () => window, true);

    var structuralCode = `
    --------------------------------------------
    STRUCTURE
    (Follow some semantic markup pattern.)
    --------------------------------------------
    
    <div c-role="card">
      <div c-role="card-icon"></div>
      <div>
        <div c-role="card-title"></div>
        <div c-role="card-desc"></div>
      </div>
    </div>
    
    --------------------------------------------
    Above, we have used the "c-role" attribute to create
    relationships for the "card" component.
    
    Now, we have the following component binding, like a tree:
    
    card
      |-- icon
      |-- title
      |-- desc
    
    This makes your UI easier to reason about and to access.
    For example, we will be able to traverse the component
    tree in JavaScript, like this:
    
    let title = card.tree.title;
    let desc = card.tree.desc;
    
    More on this shortly.
    --------------------------------------------
    `;

    var behaviouralCode = `
    --------------------------------------------
    BEHAVIOUR
    (Programmatically or declaratively add behaviour.)
    --------------------------------------------
    
    // The component instance
    let card = new Chtml(el);

    // This gives us an API similar to jQuery's DOM API
    card.css('display', 'flex');
    // Even nodes are created as CHTML instances
    card.tree.icon.css({
        width: '50px',
        height: '50px',
        borderRadius: '25px',
    });

    // Add an "onclick" behaviour
    // - "shake" the component on clicking its icon
    card.tree.icon.on('click', () => {
        card.play([
            {transform: {translate: [0, 0]}},
            {transform: {translate: ['-50px', 0]}},
            {transform: {translate: ['50px', 0]}},
            {transform: {translate: [0, 0]}},
        ], {duration: 300});
    });
    
    --------------------------------------------
    Now the interesting part is... everything above
    is acheivable right within markup.
    
    For the "onclick" behaviour, we'll use an "scoped" script.
    --------------------------------------------
    
    <div c-role="card">

      <div c-role="card-icon"></div>
      <div>
        <div c-role="card-title"></div>
        <div c-role="card-desc"></div>
      </div>

      <script type="text/jsen">
        tree.icon.on('click', () => {
            play([
                {transform: {translate: [0, 0]}},
                {transform: {translate: ['-50px', 0]}},
                {transform: {translate: ['50px', 0]}},
                {transform: {translate: [0, 0]}},
            ], {duration: 300});
        });
      </script>

    </div>

    --------------------------------------------
    The script above is scoped to the component. Notice
    that we didn't have to reference a "card" component
    as this is implicit to the code.
    --------------------------------------------
    `;

    var compositionalCode = `
    --------------------------------------------
    COMPOSITION
    (Define components once and use everywhere.)
    --------------------------------------------

    <!--
    Components are defined in a <template> element.
    So we will place our card in one. We will also assign it
    a means of identification called a "namespace".
    -->

    <template is="c-bundle">

      <div c-role="card" c-namespace="html/card">
        <div c-role="card-icon"></div>
        <div>
          <div c-role="card-title"></div>
          <div c-role="card-desc"></div>
        </div>
        <script type="text/jsen">...</script>
      </div>

    </template>

    <!--
    The <template> element itslef would live in the <head>
    section of a document.
    Components within it can be imported anywhere within
    the document <body>.
    -->

    <html>

      <head>
        <template is="c-bundle">
          <div c-role="card" c-namespace="html/card">...</div>
        </template>
      </head>

      <body>
        <c-import c-namespace="html/card"></c-import>
      </body>

    </html>
    `;

    var app = new Route({
        active: true,
        title:'Web-Native Home :: Web-Native',
        page: {
            title:'Finally, a Web-Native UI Framework!',
        },
        subroutes: Route.createRoutes({
            chtml: {
                title:'CHTML - a Web-Native UI Framework :: Web-Native',
                page: {
                    title:'Finally, a Web-Native UI Framework!',
                    slides: new Collection({
                        desc: 'New to CHTML? Here\'s a walkthrough.',
                        entries: Collection.createEntries([
                            {
                                label: 'Structure',
                                code: structuralCode,
                                next: 'Next: behaviour',
                                setEl(el) {
                                    this.el = el;
                                },
                            },
                            {
                                label: 'Behaviour',
                                code: behaviouralCode,
                                next: 'Next: composition',
                                setEl(el) {
                                    this.el = el;
                                },
                            },
                            {
                                label: 'Composition',
                                code: compositionalCode,
                                next: 'The end!',
                                setEl(el) {
                                    this.el = el;
                                },
                            },
                        ]),
                    }),
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
	