import { createSlice } from "@reduxjs/toolkit";
import SliceTypes from "../helpers/SliceTypes";

const INITIAL_STATE = {
    photos: [],
    photosLoading: false,
    photosErrorMessage: null,
    photosError: null
}
// tarimkredi edakik-m edakik-w tarimkredi-we
const PhotoSlice = createSlice({
  name: SliceTypes.PHOTOS,
  initialState: INITIAL_STATE,
  reducers: {
      changeLoading(state, action){
          state.photosLoading = action.payload;
      },
      setPhotos(state, action){
          state.photos = action.payload;
          state.photosLoading = false;
      },
      setPhotosError(state, action){
          state.photosErrorMessage = action.payload.errorMessage;
          state.photosError = action.payload.error;
          state.photosLoading = false;
      }
  },
});

export const { setPhotos, changeLoading, setPhotosError } = PhotoSlice.actions;

export default PhotoSlice.reducer;
