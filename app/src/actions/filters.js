export const filtersMovie = {
  FILTER_BY_GENRE: 'FILTER_BY_GENRE',
  FILTER_BY_ACTOR: 'FILTER_BY_ACTOR',
  FILTER_BY_PRODUCER: 'FILTER_BY_PRODUCER',


  FilterMoviesByGenre: (data) => ({
      type: filtersMovie.FILTER_BY_GENRE,
      payload: {data}
  }),
  FilterMoviesByActor: (data) => ({
      type: filtersMovie.FILTER_BY_ACTOR,
      payload: {data}
  }),
  FilterMoviesByProducer: (data) => ({
      type: filtersMovie.FILTER_BY_PRODUCER,
      payload: {data}
  })
}
