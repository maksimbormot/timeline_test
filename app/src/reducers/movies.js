import { filtersMovie } from '../actions/filters';
import { movies } from '../mockData'

const initialState = {
  movies:movies,
  filteredMovies:movies
};

export default function moviesData(state = initialState, {payload, type}) {
  const defaultMovies = state.movies.map(value=>{
      value.show = false;
    return value
  })
  switch (type) {
    case filtersMovie.FILTER_BY_GENRE: {
      if (!payload.data){
        return {...state, filteredMovies: {...state.movies}}
      }
      return {
        ...state,
        filteredMovies: defaultMovies.map(value=>{
          if(payload.data === value.sub_genre){
            value.show = true;
          }
          return value
        })
      }
    }
    case filtersMovie.FILTER_BY_ACTOR:{
      if (!payload.data){
        return {...state, filteredMovies: {...state.movies}}
      }

      return {
        ...state,
        filteredMovies: defaultMovies.map(value => {
          if(value.lead_actor.toLowerCase().indexOf(payload.data.toLowerCase()) !== -1){
            value.show = true;
          }
          return value
        })

      }
    }
    case filtersMovie.FILTER_BY_PRODUCER:{
      if (!payload.data){
        return {...state, filteredMovies: {...state.movies}}
      }
      return {
        ...state,
        filteredMovies: defaultMovies.map(value => {
          if(value.producer.toLowerCase().indexOf(payload.data.toLowerCase()) !== -1){
            value.show = true;
          }
          return value
        })

      }
    }
    default: {
      return state;
    }
  }
}
