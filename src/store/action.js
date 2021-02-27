import { createAction } from "@reduxjs/toolkit";
import ActionType from "./actionType";

const TogglePopularTypeAction = createAction(ActionType.TOGGLE_POPULAR_TYPE);

export {
    TogglePopularTypeAction,
}