
/**
 * @exports
 */

export const templateRoutePath = 'app/route';
export const isomorphic = true;
export const ssr = {
	globalWindow: 1,
};
export const webpack = {
	//mode: 'development',
	mode: 'production',
    devtool: 'inline-source-map',
};
