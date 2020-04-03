import { GET_ALL_POST, GET_POST } from '../helpers/ActionTypes';

const INITIAL_STATE = {
  posts: [],
  post: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POST.SUCCESS:
      return { ...state, posts: action.posts };

    case GET_ALL_POST.REQUEST:
      return { ...state };

    case GET_ALL_POST.FAILURE:
      return { ...state };

    case GET_POST.SUCCESS:
      return { ...state, post: action.post };

    case GET_POST.REQUEST:
      return { ...state };

    case GET_POST.FAILURE:
      return { ...state };

    default:
      return state;
  }
};
