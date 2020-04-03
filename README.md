# by-jsonplaceholderredux

This package is jsonplaceholder redux package.

### Installation

```bash
yarn add by-jsonplaceholderredux

npm i by-jsonplaceholderredux
```

### Usage

```js
// Store.js
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { addReducerToList } from "by-jsonplaceholderredux/reducers";

const allReducer = addReducerToList();

const store = createStore(allReducer, {}, compose(applyMiddleware(thunk)));

export default store;
```

```js
// App.js
import React, { Component } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import {
  getUserPost,
  getAllUser
} from "by-jsonplaceholderredux/actions/UserActions";
import { render } from "react-dom";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <TestComponent />
    </Provider>
  );
};

const TestComponent = () => {
  const users = useSelector(state => state.user.users);
  const userPosts = useSelector(state => state.user.userPosts);
  const userPostsLoading = useSelector(
    state => state.user.userPostsDataLoading
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllUser({}));
    dispatch(getUserPost({ userId: 1 }));
  }, []);

  return (
    <div>
      <h1>User Count : {users.length}</h1>
      <h1>
        User Id: 1 Posts Count: {userPosts.length}{" "}
        {userPostsLoading && "Loading..."}{" "}
      </h1>
    </div>
  );
};

render(<App />, document.getElementById("root"));
```
