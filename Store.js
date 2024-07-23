import { configureStore } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

//==============Reducers ================
import GeneralCrudOperation from './Redux/GeneralCrudOperation'
import ImageUpload from './Redux/ImageUpload'
import Auth from './Redux/Auth'
import Departments from './Redux/Departments'
import Products from './Redux/Products'
import Category from './Redux/Category'
import DeleteAnyData from './Redux/DeleteAnyData'
import Service from './Redux/Service'
import TicketManagement from './Redux/TicketManagement'
import Customer from './Redux/Customer'
import Staff from './Redux/Staff'
import Campaign from './Redux/Campaign'
import UpdateAnyData from './Redux/UpdateAnyData'
import GetListAnyData from './Redux/GetListAnyData'
import AddAnyData from './Redux/AddAnyData'
import GetAnySingleDataByID from './Redux/GetAnySingleDataByID'
const reducers = combineReducers({
  GeneralCrudOperation: GeneralCrudOperation,
  ImageUpload: ImageUpload,
  Auth,
  Departments,
  Products,
  Category,
  DeleteAnyData,
  Service,
  TicketManagement,
  Customer,
  Staff,
  Campaign,
  UpdateAnyData,
  GetListAnyData,
  AddAnyData,
  GetAnySingleDataByID,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth",] // Specify the reducers to persist
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});