import { GetMovieVideosRepositoryRequest } from '../../infrastructure/repository/GetMovieVideosRepository'
/* eslint-disable camelcase, no-console */
class GetMovieVideosService {
  constructor({ getMovieVideosRepository }) {
    this._getMovieVideosRepository = getMovieVideosRepository
  }

  async execute(getMovieVideosServiceRequest) {
    console.log('>>>GetMovieVideosService.execute')
    const getMovieVideosRepositoryResponse = await this._getMovieVideosRepository.executeAsync(
      new GetMovieVideosRepositoryRequest({
        ...getMovieVideosServiceRequest
      })
    )
    return {
      ...getMovieVideosRepositoryResponse
    }
  }
}

/* eslint-disable camelcase */
class GetMovieVideosServiceRequest {
  constructor({ movie_id, language }) {
    this.movie_id = movie_id
    this.language = language
  }
}

export { GetMovieVideosService, GetMovieVideosServiceRequest }
