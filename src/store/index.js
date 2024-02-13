import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import factReducer from '../reducers/factReducer';
import imageReducer from '../reducers/imageReducer';


const rootReducer = combineReducers({
  factShow: factReducer,
  imageUpload: imageReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
  devTools: true,
});

export default store;
