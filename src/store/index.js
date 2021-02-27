import { configureStore } from "@reduxjs/toolkit";
import{ ReducerApp }from "./reducers";

const store = configureStore ({
    reducer:ReducerApp});

export default store;

