import {combineReducers} from 'redux';
import gistCreateReducer from './gistReducers/gistCreateReducer';
import gistDeleteReducer from './gistReducers/gistDeleteReducer';
import gistUpdateReducer from './gistReducers/gistUpdateReducer';
import gistsFetchReducer from './gistReducers/gistsFetchReducer';

//Root reducer to allow for expandable state management
export default combineReducers({
    gistCreateReducer,
    gistDeleteReducer,
    gistUpdateReducer,
    gistsFetchReducer
});