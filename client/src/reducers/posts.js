export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        case 'UPDATE':
            return posts;
        case 'DELETE':
            return posts;
        case 'LIKE':
            return posts;
    
        default:
            return posts;
    }
}