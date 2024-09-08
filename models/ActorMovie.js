import { Model } from "objection"
import db from '../db.js'

Model.knex(db)

class ActorMovie extends Model {
  static get tableName() {
    return 'actor_movie'
  }
}

export default ActorMovie