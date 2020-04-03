import { fetchAllPost, fetchPost } from 'y-jsonplaceholderapi';
import { GET_ALL_POST, GET_POST } from '../helpers/ActionTypes';

export const getAllPost = () => (dispatch) => {
  dispatch({
    type: GET_ALL_POST.REQUEST,
  });

  fetchAllPost({
    successCallback: (data) => dispatch({
      type: GET_ALL_POST.SUCCESS,
      posts: data,
    }),
    failureCallback: (error) => {
      dispatch({
        type: GET_ALL_POST.FAILURE,
        error,
      });
    },
  });
};

export const getPost = ({ id }) => (dispatch) => {
  dispatch({
    type: GET_POST.REQUEST,
  });

  fetchPost({
    id,
    successCallback: (data) => dispatch({
      type: GET_POST.SUCCESS,
      post: data,
    }),
    failureCallback: (error) => {
      dispatch({
        type: GET_POST.FAILURE,
        error,
      });
    },
  });
};
