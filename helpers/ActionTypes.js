const generateTypes = (type) => ({
  SUCCESS: `${type}_SUCCESS`,
  FAILURE: `${type}_FAILURE`,
  REQUEST: `${type}_REQUEST`,
});

export const GET_USER = generateTypes('GET_USER');
export const GET_USER_POSTS = generateTypes('GET_USER_POSTS');
export const GET_ALL_USER = generateTypes('GET_ALL_USER');


export const GET_POST = generateTypes('GET_POST');
export const GET_ALL_POST = generateTypes('GET_ALL_POST');

export const GET_COMMENT = generateTypes('GET_COMMENT');
export const GET_ALL_COMMENT = generateTypes('GET_ALL_COMMENT');
