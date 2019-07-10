export const updateGist = gist => dispatch => {
  const url = 'https://gistapp.netlify.com/.netlify/functions/server';
  //http://localhost:8080/api/gists;
  dispatch(updateGistBegin());
  return fetch(url + '/' + gist.id, {
    method: 'PUT',
    body: JSON.stringify(gist),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      return dispatch(updateGistSuccess(json));
    })
    .catch(error => dispatch(updateGistFailure(error)));
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const UPDATE_GISTS_BEGIN = 'UPDATE_GISTS_BEGIN';
export const UPDATE_GISTS_SUCCESS = 'UPDATE_GISTS_SUCCESS';
export const UPDATE_GISTS_FAILURE = 'UPDATE_GISTS_FAILURE';

export const updateGistBegin = () => ({
  type: UPDATE_GISTS_BEGIN
});

export const updateGistSuccess = gist => ({
  type: UPDATE_GISTS_SUCCESS,
  payload: gist
});

export const updateGistFailure = error => ({
  type: UPDATE_GISTS_FAILURE,
  payload: {
    error
  }
});
