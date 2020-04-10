
/**
 * @imports
 */
import _Route from '@web-native-js/cui/src/app/routing/Route.js';
import Reflex from '@web-native-js/reflex';

 export default class Route extends _Route {

	/**
	 * @inheritdoc
	 */
	constructor(items = {}, params = {}) {
        super(items, params);
        Reflex.observe(this, 'current.active', activeSubroute => {
            if (activeSubroute) {
                if (activeSubroute.current.active || activeSubroute.current.activating) {
                    if (this.display !== 'hidden') {
                        return Reflex.set(this, 'display', 'hidden');
                    }
                } else if (this.display !== 'minimized') {
                    return Reflex.set(this, 'display', 'minimized');
                }
            } else if (this.display !== 'maximized') {
                return Reflex.set(this, 'display', 'maximized');
            }
        }, {observeDown:true});
    }

	/**
	 * Creates Routes from declarations.
	 *
	 * @param object|array			routes
	 * @param object|function		routeClass
	 *
	 * @return object|array
	 */
	static createRoutes(routes, routeClass = Route) {
		return super.createRoutes(routes, routeClass);
	}
};