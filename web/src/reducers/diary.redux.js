export default (state = {diary:[]}, action) => {
    switch (action.type) {
        case 'GET_ALL_DIARY':
            return {diary:action.content};
        default:
            return state
    }
}
