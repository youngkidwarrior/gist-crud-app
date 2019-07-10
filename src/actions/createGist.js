export const createGist = gist => dispatch => {
  const url = 'http://localhost:8080/.netlify/functions/app';
  //http://localhost:8080/api/gists
  dispatch(createGistBegin());
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(gist),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => {
      console.log(json.gist._doc);
      return dispatch(createGistSuccess(json.gist._doc));
    })
    .catch(error => dispatch(createGistFailure(error)));
};

export const CREATE_GIST_BEGIN = 'CREATE_GIST_BEGIN';
export const CREATE_GIST_SUCCESS = 'CREATE_GIST_SUCCESS';
export const CREATE_GIST_FAILURE = 'CREATE_GIST_FAILURE';

export const createGistBegin = () => ({
  type: CREATE_GIST_BEGIN
});

export const createGistSuccess = gist => ({
  type: CREATE_GIST_SUCCESS,
  payload: gist
});

export const createGistFailure = error => ({
  type: CREATE_GIST_FAILURE,
  payload: {
    error
  }
});
