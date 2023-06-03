import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from "remote-redux-devtools";
import reducer from "./userSlice";

const store = configureStore({
  reducer,
  devTools: [devToolsEnhancer({ realtime: true })],
});
export default store;
