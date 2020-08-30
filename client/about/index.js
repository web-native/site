
/**
 * The "/about" route handler.
 * 
 * @param object    request 
 * @param any       recieved 
 * @param function  next 
 * 
 * @return object
 */
export default async function(request, recieved, next) {
    return {
        title: 'About Web-Native------',
        main: {
            fffjfjfj: 'Finally, a Web-Native UI Framework!',
        },
    };
};