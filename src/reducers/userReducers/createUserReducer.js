const userCreateReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_USER_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'CREATE_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case 'CREATE_USER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
export default userCreateReducer;
