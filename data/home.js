
/**
 * App-wide data
 */
const data = {

    /**
     * Content for the engineering section
     */
    engr: [
        {
            label: 'CHTML',
            desc: 'A suite of short specifications and technologies that bring a component architecture to the HTML language itself.',
            tags: ['#ScopedHTML', '#ScopedCSS', '#ScopedJS', '#HTMLPartials'],
            link1: ['https://docs.web-native.dev/chtml/', 'DOCS',],
            link2: ['https://github.com/web-native/chtml', 'GitHub',],
        },
        {
            label: 'PlayUI',
            desc: 'A resilient, jQuery-inspired DOM API and an intuitive UI manipulation library.',
            tags: ['#AsynchronousDOM', '#UIPhysics'],
            link1: ['https://docs.web-native.dev/play-ui/', 'DOCS',],
            link2: ['https://github.com/web-native/play-ui', 'GitHub',],
        },
        {
            label: 'Observer Components',
            desc: 'Application components and client-side APIs implemented as live, observerive objects.',
            tags: ['#ObserverActions'],
            link1: ['https://docs.web-native.dev/observer-components/', 'DOCS',],
            link2: ['https://github.com/web-native/observer-components', 'GitHub',],
        },
        {
            label: 'Observer',
            desc: 'A general-purpose observability API for JavaScript. (JavaScript\'s new <code style="background-color:whitesmoke">Object.observe()</doce>.)',
            tags: ['#ObserverActions'],
            link1: ['https://docs.web-native.dev/observer/', 'DOCS',],
            link2: ['https://github.com/web-native/observer', 'GitHub',],
        },
        {
            label: 'JSEN',
            desc: 'A general-purpose library for parsing JavaScript expressions that execute in user-defined scopes. (JavaScript\'s micro runtime.)',
            tags: ['#scopedJS'],
            link1: ['https://docs.web-native.dev/jsen/', 'DOCS',],
            link2: ['https://github.com/web-native/jsen', 'GitHub',],
        },
        {
            label: 'Commons',
            desc: 'A thoughtful utilities library for JavaScript; used across all Web-Native modules.',
            link1: ['https://docs.web-native.dev/commons/', 'DOCS',],
            link2: ['https://github.com/web-native/commons', 'GitHub',],
        },
    ],
    
    /**
     * Content for the evangelism section
     */
    evan: [
        {},
        {},
        {},
        {
            meta: {type: 'article'},
            label: 'I’m joining web-native!', 
            desc: 'Hey, Awesome! I am pleased to announce that I am joining Web-native as a Front-end Engineer and Developer Relations!🎉', 
            link2: ['https://medium.com/@raymondosy1/im-joining-web-native-c98b2cdc5540', 'Read article',],
            authors: [{
                name: 'Raymond Akalonu',
                avatar: 'https://miro.medium.com/fit/c/48/48/0*dx5wDBZDIOiMILkr.',
                link: 'https://miro.medium.com/@raymondosy1',
            },],
        },
    ],
};

/**
 * @exports
 */
export default data;