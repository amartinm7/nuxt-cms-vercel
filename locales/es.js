import moviesGenres from './es/genres/movies/es'
import tvGenres from './es/genres/tv/es'

export default {
  genres: {
    movies: moviesGenres.genres,
    tv: tvGenres.genres
  },
  hello: 'hellobdsdd',
  movies: 'Cine',
  seo: {
    index: 'Estrenos cine hoy: todas las series de tv y cine a un click!'
  },
  pages: {
    home: 'Estrenos cine hoy',
    accion: 'Accion',
    adventure: 'Aventura',
    scify: 'Ciencia Ficcion',
    drama: 'Drama',
    comedy: 'Comedia',
    family: 'Familia',
    news: 'Noticias',
    trending: 'Actual',
    tv_by_genre: 'Series Por Género',
    movies_by_genre: 'Cine Por Género',
    tv: {
      airingToday: 'Hoy en TV',
      onTheAirTv: 'Series en TV',
      popular: 'Popular en TV',
      topRated: 'Top Series'
    },
    movies: {
      nowPlaying: 'En cines',
      popular: 'Popular en Cine',
      topRated: 'Top Cine',
      upcoming: 'Avances cine'
    }
  },
  select: {
    language: 'Idiomas'
  },
  switcher: {
    trendingMovies: 'Tendencia en Cine',
    trendingTVShows: 'Tendencia en Series TV'
  },
  sliderSwitcher: {
    credits: 'Reparto',
    posters: 'Posters',
    trailers: 'Trailers'
  },
  releaseDate: 'Fecha en cines',
  firstAirDate: 'En emision desde'
}
