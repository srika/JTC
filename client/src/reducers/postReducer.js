import {
    ADD_POST,
    GET_POSTS,
    POST_LOADING,
    CLEAR_POSTS
  } from "../actions/types";
  
  const initialState = {
    posts: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case POST_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_POSTS:
        return {
          ...state,
          posts: action.payload,
          loading: false
        };
      case ADD_POST:
        return {
          ...state,
          posts: [action.payload, ...state.posts]
        };
      case CLEAR_POSTS:
        return {
          ...state,
          posts: []
        };
      default:
        return state;
    }
  }
  