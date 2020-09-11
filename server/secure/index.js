
/**
 * @imports
 */
import OAuth2CodeFlow from '@onephrase/oauth2-node-client';

/**
 * Middleware stack
 */
export var middlewares = [
    OAuth2CodeFlow.createMiddleware({
        authorizationURL: process.env.OAUTH_AUTHORIZATION_URL,
        tokenURL: process.env.OAUTH_TOKEN_URL,
        callbackURL: process.env.OAUTH_CALLBACK_URL,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
    }),
];

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

        if (await request.oauth.finishAuthenticationFlow()) {
            return;
        }
        var authStatus = await request.oauth.requireAuthentication();
        if (authStatus) {
            console.log('>>', authStatus);
            request.oauth.logout();
        } else {
            return;
        }

        response = {
            title: 'Secure Login',
            main: {},
        };
    }

    return response;
};
