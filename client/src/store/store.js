import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer } from '../reducers/userReducers';
import { proposalReducer } from '../reducers/proposalReducer';

const reducers = combineReducers({
    user: userReducer,
    proposal: proposalReducer
});

const middleware = [thunk];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;