import { fetchAllUser, fetchUser, fetchUserPost } from 'by-jsonplaceholderapi';
import { GET_ALL_USER, GET_USER, GET_USER_POSTS } from '../helpers/ActionTypes';

export const getAllUser = () => (dispatch) => {
  dispatch({
    type: GET_ALL_USER.REQUEST,
  });

  fetchAllUser({
    successCallback: (data) => dispatch({
      type: GET_ALL_USER.SUCCESS,
      users: data,
    }),
    failureCallback: (error) => {
      dispatch({
        type: GET_ALL_USER.FAILURE,
        error,
      });
    },
  });
};

export const getUser = ({ userId }) => (dispatch) => {
  dispatch({
    type: GET_USER.REQUEST,
  });

  fetchUser({
    userId,
    successCallback: (data) => dispatch({
      type: GET_USER.SUCCESS,
      user: data,
    }),
    failureCallback: (error) => {
      dispatch({
        type: GET_USER.FAILURE,
        error,
      });
    },
  });
};

export const getUserPost = ({ userId }) => (dispatch) => {
  dispatch({
    type: GET_USER_POSTS.REQUEST,
  });

  fetchUserPost({
    userId,
    successCallback: (data) => dispatch({
      type: GET_USER_POSTS.SUCCESS,
      userPosts: data,
    }),
    failureCallback: (error) => {
      dispatch({
        type: GET_USER_POSTS.FAILURE,
        error,
      });
    },
  });
};
