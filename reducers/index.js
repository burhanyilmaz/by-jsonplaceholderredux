import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import PostReducer from './PostReducer';
import PhotosSlice from '../slices/PhotosSlice';

const reducers = {
  user: UserReducer,
  post: PostReducer,
  photos: PhotosSlice,
};

export default combineReducers(reducers);

export const addReducerToList = (reducer) => combineReducers({ ...reducers, ...reducer });
