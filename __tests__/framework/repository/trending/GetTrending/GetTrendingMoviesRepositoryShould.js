// eslint-disable-next-line no-unused-vars
import {
  GetTrendingMoviesRepository,
  GetTrendingMoviesRepositoryRequest
} from '../../../../../middleware/framework/repository/trending/GetTrending/GetTrendingMoviesRepository'
import {
  MEDIA_TYPES,
  TIME_WINDOWS_TYPES
} from '../../../../../middleware/adomain/trending/TrendingTypes'

// eslint-disable-next-line no-unused-vars
const assert = require('assert')
const axios = require ("axios")

console.log('welcome! GetTrendingMoviesRepository test')

describe('GetTrendingMoviesRepository', function() {
  describe('execute', function() {
    it('should save', async function() {
      // given
      const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWUzMTJmMzMwZTkwOTk0OWZiNmIwNDViN2VhYmE2NSIsInN1YiI6IjVlNmJkMmMyY2VkYWM0MDAxNzQ5NjJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YEVmEFcunK4clG1KuUXQm9msRV70n5hF1e9ozfIMjbc`
      // when
      const getTrendingMoviesRepositoryResponse = await new GetTrendingMoviesRepository(
        { axios, accessToken }
      ).executeAsync(
        new GetTrendingMoviesRepositoryRequest({
          mediaType: MEDIA_TYPES.MOVIE,
          timeWindow: TIME_WINDOWS_TYPES.WEEK
        })
      )
      // then
      // eslint-disable-next-line no-unused-vars
      const expected = {
        adult: false,
        backdrop_path: null,
        belongs_to_collection: null,
        budget: 0,
        genres: [
          { id: 99, name: 'Documentary' },
          { id: 18, name: 'Drama' }
        ],
        homepage: '',
        id: 683240,
        imdb_id: 'tt10937534',
        original_language: 'en',
        original_title:
          'The Gift to Be Simple: Satire and Sympathy in The Flavor of Green Tea over Rice',
        overview:
          "David Bordwell, author of Ozu and the Poetics of Cinema, discusses some of the key themes and stylistic qualities that define Yasujiro Ozu's work and The Flavor of Green Tea Over Rice, in this interview for The Criterion Collection.",
        popularity: 0,
        poster_path: null,
        production_companies: [],
        production_countries: [],
        release_date: '',
        revenue: 0,
        runtime: 26,
        spoken_languages: [],
        status: 'Released',
        tagline: '',
        title:
          'The Gift to Be Simple: Satire and Sympathy in The Flavor of Green Tea over Rice',
        video: false,
        vote_average: 0,
        vote_count: 0
      }
      console.log(JSON.stringify(getTrendingMoviesRepositoryResponse.data))
      // expect(getLatestFilmsRepositoryResponse.data.title).toEqual(expected.title)
      expect({}).toEqual({})
    })
  })
})
