import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./comments";

const rootReducer = {
  comments: commentReducer,
};

export default function () {
  return configureStore({
    reducer: rootReducer,
  });
}
