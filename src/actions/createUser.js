export const createUser = user => dispatch => {
  const url = 'http://localhost:8080/api/users';
  dispatch(createUserBegin());
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => {
      console.log(json.user._doc);
      return dispatch(createUserSuccess(json.user._doc));
    })
    .catch(error => dispatch(createUserFailure(error)));
};

export const CREATE_USER_BEGIN = 'CREATE_USER_BEGIN';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const createUserBegin = () => ({
  type: CREATE_USER_BEGIN
});

export const createUserSuccess = user => ({
  type: CREATE_USER_SUCCESS,
  payload: user
});

export const createUserFailure = error => ({
  type: CREATE_USER_FAILURE,
  payload: {
    error
  }
});
