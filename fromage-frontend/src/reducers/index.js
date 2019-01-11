import { combineReducers } from 'redux';
import deliverReducer from './deliver';

const rootReducer = combineReducers({
  deliverReducer,
});

export default rootReducer;