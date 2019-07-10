export const fetchGists = () => dispatch => {
  const url = 'https://gistapp.netlify.com/.netlify/functions/app';
  //http://localhost:8080/api/gists;
  dispatch(fetchGistsBegin());
  return fetch(url)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      return dispatch(fetchGistsSuccess(json.gists));
    })
    .catch(error => dispatch(fetchGistsFailure(error)));
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_GISTS_BEGIN = 'FETCH_GISTS_BEGIN';
export const FETCH_GISTS_SUCCESS = 'FETCH_GISTS_SUCCESS';
export const FETCH_GISTS_FAILURE = 'FETCH_GISTS_FAILURE';

export const fetchGistsBegin = () => ({
  type: FETCH_GISTS_BEGIN
});

export const fetchGistsSuccess = gists => ({
  type: FETCH_GISTS_SUCCESS,
  payload: gists
});

export const fetchGistsFailure = error => ({
  type: FETCH_GISTS_FAILURE,
  payload: {
    error
  }
});
