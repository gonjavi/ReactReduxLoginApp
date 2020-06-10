import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

//combinar los reducer en el root
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
})

export default rootReducer;