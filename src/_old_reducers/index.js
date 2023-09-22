import taskReducer from './taskReducer';
import { combineReducers } from 'redux';

const rootRecducer = combineReducers({
  tasks: taskReducer,
});

export default rootRecducer;
