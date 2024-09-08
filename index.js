'use strict'

import Hapi from '@hapi/hapi'
import Actor from './models/Actor.js'
import Movie from './models/Movie.js'
import knex from './db.js'

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  })

  server.route({
    method: 'GET',
    path: '/actors',
    handler: async (request, h) => {
      try {
        const actors = await Actor.query()
        return actors
      } catch (error) {
        console.log('error: ', error)
        return error
      }
    },
    method: 'GET',
    path: '/movies',
    handler: async (request, h) => {
      try {
        const movies = await Movie.query()
        return movies
      } catch (error) {
        console.log('error: ', error)
        return error
      }
    },
    method: 'GET',
    path: '/actors-movies',
    handler: async () => {
      try {
        const actors_movies = await knex.raw(`
          SELECT actors.name AS actor_name, movies.name 
          FROM actor_movie
          INNER JOIN actors ON actor_movie.actor_id = actors.id
          INNER JOIN movies ON actor_movie.movie_id = movies.id;
        `)
        return actors_movies.rows
      } catch (error) {
        console.log('error: ', error)
        return error
      }
    }
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhanded rejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()