const gistCreateReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_GIST_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'CREATE_GIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case 'CREATE_GIST_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
export default gistCreateReducer;
