import { GetLatestMoviesRepository } from '../repository/movies/getLatest/GetLatestMoviesRepository'
import { GetTrendingMoviesRepository } from '../repository/trending/getTrending/GetTrendingMoviesRepository'
import { GetTvShowsVideosRepository } from '../repository/tvShows/GetVideos/GetTvShowsVideosRepository'
import { GetLatestMoviesService } from '../../application/usecases/movies/getLatest/GetLatestMoviesService'
import { GetTrendingMoviesService } from '../../application/usecases/trending/getTrending/GetTrendingMoviesService'
import { GetTvShowsVideosService } from '../../application/usecases/tv/GetVideos/GetTvShowsVideosService'
import { GetTrendingMoviesController } from '../controller/trending/getTrending/GetTrendingMoviesController'
import { GetLatestMoviesController } from '../controller/movies/getLatest/GetLatestMoviesController'
import { GetTvShowsVideosController } from '../controller/tv/GetVideos/GetTvShowsVideosController'
import { GetMovieVideosRepository } from '../repository/movies/getVideos/GetMovieVideosRepository'
import { GetMovieVideosService } from '../../application/usecases/movies/getVideos/GetMovieVideosService'
import { GetMovieVideosController } from '../controller/movies/getVideos/GetMovieVideosController'
import * as Globalconfiguration from '../modules/security/GlobalConfiguration'

const accessToken = Globalconfiguration.theMovieDBConfigEnv
const axios = require('axios')

let instance = null

export default class ApplicationFacadeFactoryBean {
  constructor() {
    const config = { axios, accessToken }
    const getLatestMoviesRepository = new GetLatestMoviesRepository(config)
    const getTrendingMoviesRepository = new GetTrendingMoviesRepository(config)
    const getTvShowsVideosRepository = new GetTvShowsVideosRepository(config)
    const getMovieVideosRepository = new GetMovieVideosRepository(config)

    const getLatestMoviesService = new GetLatestMoviesService({
      getLatestMoviesRepository
    })
    const getTrendingMoviesService = new GetTrendingMoviesService({
      getTrendingMoviesRepository
    })
    const getTvShowsVideosService = new GetTvShowsVideosService({
      getTvShowsVideosRepository
    })

    const getMovieVideosService = new GetMovieVideosService({
      getMovieVideosRepository
    })

    this._getLatestMoviesController = new GetLatestMoviesController({
      getLatestMoviesService
    })

    this._getTrendingMoviesController = new GetTrendingMoviesController({
      getTrendingMoviesService
    })

    this._getTvShowsVideosController = new GetTvShowsVideosController({
      getTvShowsVideosService
    })

    this._getMovieVideosController = new GetMovieVideosController({
      getMovieVideosService
    })
  }

  static getInstance() {
    if (!instance) {
      instance = new ApplicationFacadeFactoryBean()
    }
    return instance
  }

  static getLatestMoviesController() {
    return this.getInstance()._getLatestMoviesController
  }

  static getTrendingMoviesController() {
    return this.getInstance()._getTrendingMoviesController
  }

  static getTvShowsVideosController() {
    return this.getInstance()._getTvShowsVideosController
  }

  static getMovieVideosController() {
    return this.getInstance()._getMovieVideosController
  }
}
