import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import store from './store/store.js';
import { Provider } from 'react-redux';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { AuthProtect } from './components';
import { Home, Signup, Login, AllPosts, AddPost, EditPost, Post } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route
        path="login"
        element={
          <AuthProtect authentication={false}>
            <Login />
          </AuthProtect>
        }
      />
      <Route
        path="signup"
        element={
          <AuthProtect authentication={false}>
            <Signup />
          </AuthProtect>
        }
      />
      <Route
        path="posts"
        element={
          <AuthProtect authentication>
            <AllPosts />
          </AuthProtect>
        }
      />
      <Route
        path="add-post"
        element={
          <AuthProtect authentication>
            <AddPost />
          </AuthProtect>
        }
      />
      <Route
        path="edit-post/:slug"
        element={
          <AuthProtect authentication>
            <EditPost />
          </AuthProtect>
        }
      />
      <Route
        path="/post/:slug"
        element={
          <AuthProtect authentication>
            <Post />
          </AuthProtect>
        }
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
