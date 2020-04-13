import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    photos: [],
    photosLoading: false,
    photosErrorMessage: null,
    photosError: null
}

const PhotoSlice = createSlice({
  name: "photos",
  initialState: INITIAL_STATE,
  reducers: {
      changeLoading(state, action){
          state.photosLoading = action.status;
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
