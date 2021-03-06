import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

export function addArticle(payload) {
    return {
        type: ADD_ARTICLE,
        payload
    }
};

export function getData() {
    console.log('get data called')
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: DATA_LOADED, payload: json });
        });
    };
  }