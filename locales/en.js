import moviesGenres from './en/genres/movies/en'
import tvGenres from './en/genres/tv/en'

export default {
  genres: {
    movies: moviesGenres.genres,
    tv: tvGenres.genres
  },
  hello: 'helloxxx',
  movies: 'Movies',
  seo: {
    index: 'Estrenos cine hoy: all the tv shows and the cinema in a one click!'
  },
  pages: {
    home: 'Estrenos cine hoy',
    accion: 'Accion',
    adventure: 'Adventure',
    scify: 'Scify',
    drama: 'Drama',
    comedy: 'Comedy',
    family: 'Family',
    news: 'News',
    trending: 'Trends',
    tv_by_genre: 'Series By Genre',
    movies_by_genre: 'Movies By Genre',
    tv: {
      airingToday: 'Airing Today on TV',
      onTheAirTv: 'On the Air TV',
      popular: 'Popular on TV',
      topRated: 'Top Rated on TV',
      byGenres: 'Series By Genre'
    },
    movies: {
      nowPlaying: 'Now in cinemas',
      popular: 'Popular movies',
      topRated: 'Top Rated Movies',
      upcoming: 'Coming Movies',
      byGenres: 'Movies By Genre'
    }
  },
  select: {
    language: 'Languages'
  },
  switcher: {
    trendingMovies: 'Trending Movies',
    trendingTVShows: 'Trending TV Shows'
  },
  sliderSwitcher: {
    credits: 'Credits',
    posters: 'Posters',
    trailers: 'Trailers'
  },
  releaseDate: 'Release Date',
  firstAirDate: 'First Air Date'
}
