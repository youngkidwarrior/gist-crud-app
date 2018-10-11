const gistUpdateReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_GIST_BEGIN':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'UPDATE_GIST_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case 'UPDATE_GIST_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }

}
export default gistUpdateReducer;