/* eslint-disable camelcase, no-console */
import { BeanContainerRegistry } from './BeanContainerRegistry'

const actions = {
  tv: {
    airingToday: BeanContainerRegistry.getBeanContainer()
      .getAiringTodayTvShowController,
    latest: BeanContainerRegistry.getBeanContainer().getLatestTvShowController,
    onTheAirTv: BeanContainerRegistry.getBeanContainer()
      .getOnTheAirTvShowController,
    popular: BeanContainerRegistry.getBeanContainer()
      .getPopularTvShowController,
    topRated: BeanContainerRegistry.getBeanContainer()
      .getTopRatedTvShowController
  },
  movies: {
    latest: BeanContainerRegistry.getBeanContainer().getLatestMoviesController,
    nowPlaying: BeanContainerRegistry.getBeanContainer()
      .getNowPlayingMoviesController,
    popular: BeanContainerRegistry.getBeanContainer()
      .getPopularMoviesController,
    topRated: BeanContainerRegistry.getBeanContainer()
      .getTopRatedMoviesController,
    upcoming: BeanContainerRegistry.getBeanContainer()
      .getUpcomingMoviesController
  }
}

export default class ActionMapper {
  static getController({ mediaType, action }) {
    return actions[mediaType][action]
  }
}
