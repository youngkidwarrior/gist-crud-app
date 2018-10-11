const gistsFetchReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_GISTS_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_GISTS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case 'FETCH_GISTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
export default gistsFetchReducer;
