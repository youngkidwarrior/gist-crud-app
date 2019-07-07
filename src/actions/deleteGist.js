export const deleteGist = gistId => dispatch => {
  const url = 'https://netlify-express.netlify.com/.netlify/functions/server';
  //http://localhost:8080/api/gists;
  dispatch(deleteGistBegin());
  return fetch(url + '/' + gistId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      return dispatch(deleteGistSuccess(json.message));
    })
    .catch(error => dispatch(deleteGistFailure(error)));
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const DELETE_GIST_BEGIN = 'DELETE_GIST_BEGIN';
export const DELETE_GIST_SUCCESS = 'DELETE_GIST_SUCCESS';
export const DELETE_GIST_FAILURE = 'DELETE_GIST_FAILURE';

export const deleteGistBegin = () => ({
  type: DELETE_GIST_BEGIN
});

export const deleteGistSuccess = response => ({
  type: DELETE_GIST_SUCCESS,
  payload: response
});

export const deleteGistFailure = error => ({
  type: DELETE_GIST_FAILURE,
  payload: {
    error
  }
});
