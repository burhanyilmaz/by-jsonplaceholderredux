import { fetchPhotos } from "by-jsonplaceholderapi";
import { setPhotosError, setPhotos } from "../slices/PhotosSlice";

export const getPhotos = () => (dispatch) => {
  fetchPhotos({
    failureCallback: (error) => dispatch(setPhotosError({error, errorMessage: 'Failure'})),
    successCallback: (data) => dispatch(setPhotos(data)),
  });
};
