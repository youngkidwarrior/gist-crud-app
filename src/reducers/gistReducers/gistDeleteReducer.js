const gistDeleteReducer = (state = [], action) => {
  switch (action.type) {
    case 'DELETE_GIST_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'DELETE_GIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case 'DELETE_GIST_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
export default gistDeleteReducer;
