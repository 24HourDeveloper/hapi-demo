import { Model } from "objection"
import db from '../db.js'

Model.knex(db)

class Movie extends Model {
  static get tableName() {
    return 'movies'
  }

  static get idColumn() {
    return 'id'
  }
}

export default Movie