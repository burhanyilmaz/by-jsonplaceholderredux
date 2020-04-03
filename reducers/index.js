import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import PostReducer from './PostReducer';

const reducers = {
  user: UserReducer,
  post: PostReducer,
};

export default combineReducers(reducers);

export const addReducerToList = (reducer) => combineReducers({ ...reducers, ...reducer });
