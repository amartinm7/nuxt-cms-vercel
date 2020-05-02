import GetAxiosRequest from '../../../../../framework/modules/axios/GetAxiosRequest'
/* eslint-disable camelcase, no-console */
class GetTopRatedTvShowRepository {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }

  /**
   * Get getTopRatedTvShow
   * @param getTopRatedTvShowRepositoryRequest
   * @returns {*}
   */
  execute(getTopRatedTvShowRepositoryRequest) {
    const { page, language } = { ...getTopRatedTvShowRepositoryRequest }
    const urlPath = `/tv/popular?language=${language}&page=${page}`
    return this._axios(
      new GetAxiosRequest({
        accessToken: this._accessToken,
        baseURL: 'https://api.themoviedb.org/3'
      }).getRequest(urlPath)
    )
  }

  async executeAsync(getTopRatedTvShowRepositoryRequest) {
    const axiosResponse = await this.execute(getTopRatedTvShowRepositoryRequest)
    return new GetTopRatedTvShowRepositoryResponse({ ...axiosResponse.data })
  }
}

class GetTopRatedTvShowRepositoryRequest {
  constructor({ page, language }) {
    this.page = page || 1
    this.language = language
  }
}

/* eslint-disable camelcase */
class GetTopRatedTvShowRepositoryResponse {
  constructor({ page, total_pages, total_results, results }) {
    this._page = page
    this._total_pages = total_pages
    this._total_results = total_results
    this._results = results.map((it) => {
      // eslint-disable-next-line no-new
      return new GetTopRatedTvShowRepositoryResponseResult(it)
    })
  }
}

class GetTopRatedTvShowRepositoryResponseResult {
  constructor({
    id,
    title,
    name,
    vote_account,
    vote_average,
    release_date,
    overview,
    adult,
    genre_ids,
    poster_path,
    backdrop_path,
    popularity
  }) {
    this._id = id
    this._title = title
    this._name = name
    this._vote_account = vote_account
    this._vote_average = vote_average
    this._release_date = release_date
    this._overview = overview
    this._adult = adult
    this._genre_ids = genre_ids
    this._poster_path = poster_path
    this._backdrop_path = backdrop_path
    this._popularity = popularity
  }
}

export {
  GetTopRatedTvShowRepository,
  GetTopRatedTvShowRepositoryRequest,
  GetTopRatedTvShowRepositoryResponse,
  GetTopRatedTvShowRepositoryResponseResult
}
