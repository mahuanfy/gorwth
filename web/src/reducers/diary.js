export default (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_DIARY':
            console.log("AAAA", action.content);
            return action.content;
    }
    return state;
}
