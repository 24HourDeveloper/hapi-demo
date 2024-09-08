export default {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '2020Develop3r',
      database: 'actormovies'
    },
    seeds: {
      directory: './seeds/dev'
    }
  }
}