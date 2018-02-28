export const circleDiametr = 20
export const movies = [
  {
    id: 1,
    title: "Earth Trailers",
    release: '2008-7-04',
    lead_actor: 'Dalton Keck',
    sub_genre: 'zombies',
    producer: 'Burt Reynolds'
  },
  {
    id: 2,
    title: "Man Man",
    release: '2022-8-04',
    lead_actor: 'Mark Hamill',
    sub_genre: 'science',
    producer: 'Wesley Anderson'
  },
  {
    id: 3,
    title: "Great D",
    release: '2019-7-04',
    lead_actor: 'Dalton Keck',
    sub_genre: 'nature',
    producer: 'Burt Reynolds'
  },
  {
    id: 4,
    title: "Yellow Planet",
    release: '2009-5-12',
    lead_actor: 'Dalton Keck',
    sub_genre: 'science',
    producer: 'Tim Cook'
  },
  {
    id: 5,
    title: "Darky",
    release: '2008-7-04',
    lead_actor: 'Mark Hamill',
    sub_genre: 'nature',
    producer: 'Wesley Anderson'
  },
  {
    id: 6,
    title: "Magma",
    release: '2001-7-02',
    lead_actor: 'Dalton Keck',
    sub_genre: 'zombies',
    producer: 'Burt Reynolds'
  },
  {
    id: 7,
    title: "Big Jump",
    release: '2003-7-04',
    lead_actor: 'Dalton Keck',
    sub_genre: 'zombies',
    producer: 'Tim Cook'
  },
]

export const filteredMovies = movies.sort((a, b)=> {
  return (new Date(a.release).getTime() - new Date(b.release).getTime())
})

export const subGenre = [
  {title: 'Nature', value:'nature'},
  {title: 'Sceince', value:'science'},
  {title: 'Zombies', value:'zombies'},
]
