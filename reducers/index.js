import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import PostReducer from './PostReducer';
import PhotosSlice from '../slices/PhotosSlice';
import { STATE_NAMES } from '../helpers/StateNames';

const reducers = {
  [STATE_NAMES.USER]: UserReducer,
  [STATE_NAMES.POST]: PostReducer,
  [STATE_NAMES.PHOTOS]: PhotosSlice,
};

export default combineReducers(reducers);

export const addReducerToList = (reducer) => combineReducers({ ...reducers, ...reducer });
