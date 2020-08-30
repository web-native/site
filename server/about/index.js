
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
    return {
        title: 'About Web-Native!',
    };
};