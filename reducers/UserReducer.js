import { GET_ALL_USER, GET_USER, GET_USER_POSTS } from '../helpers/ActionTypes';

const INITIAL_STATE = {
  users: [],
  usersDataLoading: false,
  user: null,
  userDataLoading: false,
  userPosts: [],
  userPostsDataLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USER.SUCCESS:
      return { ...state, users: action.users, usersDataLoading: false };

    case GET_ALL_USER.REQUEST:
      return { ...state, usersDataLoading: true };

    case GET_ALL_USER.FAILURE:
      return { ...state, usersDataLoading: false };

    case GET_USER.SUCCESS:
      return { ...state, user: action.user, userDataLoading: false };

    case GET_USER.REQUEST:
      return { ...state, userDataLoading: true };

    case GET_USER.FAILURE:
      return { ...state, userDataLoading: false };

    case GET_USER_POSTS.SUCCESS:
      return { ...state, userPosts: action.userPosts, userPostsDataLoading: false };

    case GET_USER_POSTS.REQUEST:
      return { ...state, userPostsDataLoading: true };

    case GET_USER_POSTS.FAILURE:
      return { ...state, userPostsDataLoading: false };

    default:
      return state;
  }
};
