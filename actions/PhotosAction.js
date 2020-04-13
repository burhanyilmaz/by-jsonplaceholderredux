import { fetchPhotos } from "by-jsonplaceholderapi";
import { setPhotosError, setPhotos, changeLoading } from "../slices/PhotosSlice";

export const getPhotos = () => (dispatch) => {
  dispatch(changeLoading(true));
  fetchPhotos({
    failureCallback: (error) => dispatch(setPhotosError({error, errorMessage: 'Failure'})),
    successCallback: (data) => dispatch(setPhotos(data)),
  });
};
