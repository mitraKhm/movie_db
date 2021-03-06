import { createAction } from "@reduxjs/toolkit";
import ActionType from "./actionType";

const TogglePopularTypeAction = createAction(ActionType.TOGGLE_POPULAR_TYPE);
const GetPopularMovieDataAction = createAction(ActionType.GET_POPULAR_DATA);
const SetPopLoading = createAction(ActionType.POP_LOADING);
const GetSearchResult = createAction(ActionType.GET_SEARCH_DATA);
const SetSearchLoading = createAction(ActionType.SEARCH_LOADING); 
const CheckSearchSubject = createAction(ActionType.SEARCH_SUBJECT);
const GetMovieResAction = createAction(ActionType.SEARCH_MOVIE);
const GetOnTvRes = createAction(ActionType.SEARCH_ON_TV);
const GetActorRes = createAction(ActionType.SEARCH_ACTOR);

export {
    TogglePopularTypeAction,
    GetPopularMovieDataAction,
    SetPopLoading,
    GetSearchResult,
    SetSearchLoading,
    CheckSearchSubject,
    GetMovieResAction ,
    GetOnTvRes,
    GetActorRes ,
}