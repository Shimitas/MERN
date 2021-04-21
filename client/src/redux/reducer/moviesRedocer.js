import { ADD_MOVIE, SHOW_MOVIE, DELETE_MOVIE } from "../actions";

export default function moviesRedocer(state = { movies: [] }, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return { movies: [...state.movies, action.payload] };

    case SHOW_MOVIE:
      return { ...state.movies };

    case DELETE_MOVIE:
      return {
        ...state.movies,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
      };
    default:
        return state;
  }
}