import { Model } from "objection"
import db from '../db.js'

Model.knex(db)

class Actor extends Model {
  static get tableName() {
    return 'actors'
  }

  static get idColumn() {
    return 'id'
  }
}

export default Actor