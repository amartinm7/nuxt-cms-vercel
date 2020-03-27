// eslint-disable-next-line no-unused-vars
import {
  GetLatestMoviesRepository,
  GetLatestMoviesRepositoryRequest,
  GetLatestMoviesRepositoryResponse
} from '../../../../../middleware/framework/repository/movies/getLatest/GetLatestMoviesRepository'

// eslint-disable-next-line no-unused-vars
const assert = require('assert')
const axios = require('axios')

console.log('welcome! GetLatestMoviesRepository test')

describe('GetLatestMoviesRepository', function() {
  describe('execute', function() {
    it('should save', async function() {
      // given
      const accessToken = `accessToken`
      // eslint-disable-next-line no-unused-vars
      const expected = {
        adult: false,
        backdrop_path: '/hkaV970KVugX2ZSffp2jTFhcH0w.jpg',
        belongs_to_collection: null,
        budget: 0,
        genres: [],
        homepage: '',
        id: 683882,
        imdb_id: 'tt0861703',
        original_language: 'en',
        original_title: 'Dil Kitna Nadan Hai',
        overview:
          'Kiran, upon completion of her studies abroad, returns to India. She falls in love with Raja without realising his deception.',
        popularity: 0,
        poster_path: '/5kVkkr7N28OjJnY74wcvf8iITdV.jpg',
        production_companies: [],
        production_countries: [],
        release_date: '1997-05-08',
        revenue: 0,
        runtime: 0,
        spoken_languages: [],
        status: 'Released',
        tagline: '',
        title: 'Dil Kitna Nadan Hai',
        video: false,
        vote_average: 0,
        vote_count: 0
      }
      const mockedAds = require('./getLatestMoviesRepositoryAxiosResponse.json')
      const mockGetLatestMoviesRepository = jest.fn()
      GetLatestMoviesRepository.prototype.execute = mockGetLatestMoviesRepository
      mockGetLatestMoviesRepository.mockReturnValue(Promise.resolve(mockedAds))
      // when
      const getLatestMoviesRepositoryResponse = await new GetLatestMoviesRepository(
        {
          axios,
          accessToken
        }
      ).executeAsync(new GetLatestMoviesRepositoryRequest())
      // then
      console.log(JSON.stringify(getLatestMoviesRepositoryResponse))
      // expect(getLatestFilmsRepositoryResponse.data.title).toEqual(expected.title)
      expect(new GetLatestMoviesRepositoryResponse(expected)).toEqual(
        getLatestMoviesRepositoryResponse
      )
    })
  })
})