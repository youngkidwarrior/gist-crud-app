const gistFetchOneReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ONE_GIST_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_ONE_GIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case 'FETCH_ONE_GIST_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
export default gistFetchOneReducer;

//Not sure if reducer is reducing or how to access reducer values
