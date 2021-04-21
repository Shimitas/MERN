/**
 * consist action type strings
 */

 export const ADD_MOVIE = 'ADD_MOVIE';
 export const SHOW_MOVIE = 'SHOW_MOVIE';
 export const UPDATE_MOVIE = 'UPDATE_MOVIE';
 export const DELETE_MOVIE = 'DELETE_MOVIE';
 
 /**
  * add movie action
  * @param {Movie} movieItem 
  * @returns action with type: ADD_MOVIE:ADD_MOVIE and payload:movieItem
  */
  
 export const addMovie=(movieItem)=>{
     return {type: ADD_MOVIE , payload: movieItem}
 }
 
 export const showMovies=()=>{
     return {type: SHOW_MOVIE}
 }
 
 // export const deleteMovie=(movieId)=>{
 // return {type: DELETE_MOVIE, payload: movieId}
 // }