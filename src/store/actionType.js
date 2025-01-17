import { createAction } from "@reduxjs/toolkit";

const ActionType = {
  TOGGLE_POPULAR_TYPE : "TOGGLE_POPULAR_TYPE",
  GET_POPULAR_DATA :'GET_POPULAR_DATA',
  POP_LOADING : "POP_LOADING",
  GET_SEARCH_DATA:"  GET_SEARCH_DATA",
  SEARCH_LOADING : "SEARCH_LOADING",
  SEARCH_SUBJECT : ' SEARCH_SUBJECT',
  SEARCH_MOVIE :" SEARCH_MOVIE",
  SEARCH_ON_TV :"  SEARCH_ON_TV ",
  SEARCH_ACTOR :"  SEARCH_ACTOR",
  SEARCH_RES_STATE:"SEARCH_RES_STATE",
  SHOW_UI_RES:"SHOW_UI_RES"

}


export default ActionType;