// eslint-disable-next-line import/named
import Slugger from '../../../../middleware/framework/modules/slugger/Slugger'

const assert = require('assert')

console.log('welcome! SluggerShould test')
/* eslint-disable camelcase */
describe('SluggerShould', function() {
  describe('execute', function() {
    it('should slugger one param', function() {
      const expectedSlug = 'star-wars-the-rice-of-skywalker'
      const movie_title = 'Star Wars The Rice of SkyWalker'
      const actualSlug = Slugger.sluggify([movie_title])
      expect(actualSlug).toEqual(expectedSlug)
    })
    it('should slugger two params', function() {
      const expectedSlug = '12341234-star-wars-the-rice-of-skywalker'
      const movie_id = 12341234
      const movie_title = 'Star Wars The Rice of SkyWalker'
      const actualSlug = Slugger.sluggify([
        movie_id,
        movie_title
      ])
      expect(actualSlug).toEqual(expectedSlug)
    })
  })
})

// var print = console.log.bind(console, '>')
