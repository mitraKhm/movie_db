import { createAction } from "@reduxjs/toolkit";
import ActionType from "./actionType";

const TogglePopularTypeAction = createAction(ActionType.TOGGLE_POPULAR_TYPE);
const GetPopularMovieDataAction = createAction(ActionType.GET_POPULAR_DATA);
const SetPopLoading =createAction(ActionType.POP_LOADING)

export {
    TogglePopularTypeAction,
    GetPopularMovieDataAction,
    SetPopLoading
}