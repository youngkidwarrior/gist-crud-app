export const fetchOneGist = gistId => dispatch => {
  const url = 'https://gistapp.netlify.com/.netlify/functions/server;
  //http://localhost:8080/api/gists;
  dispatch(fetchOneGistBegin());
  return fetch(url + '/' + gistId)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      return dispatch(fetchOneGistSuccess(json));
    })
    .catch(error => dispatch(fetchOneGistFailure(error)));
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_ONE_GIST_BEGIN = 'FETCH_ONE_GIST_BEGIN';
export const FETCH_ONE_GIST_SUCCESS = 'FETCH_ONE_GIST_SUCCESS';
export const FETCH_ONE_GIST_FAILURE = 'FETCH_ONE_GIST_FAILURE';

export const fetchOneGistBegin = () => ({
  type: FETCH_ONE_GIST_BEGIN
});

export const fetchOneGistSuccess = gist => ({
  type: FETCH_ONE_GIST_SUCCESS,
  payload: gist
});

export const fetchOneGistFailure = error => ({
  type: FETCH_ONE_GIST_FAILURE,
  payload: {
    error
  }
});
