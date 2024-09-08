/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('actor_movie', function(table) {
    table.integer('actor_id').unsigned().notNullable()
    table.foreign('actor_id').references('id').inTable('actors').onDelete('CASCADE')

    table.integer('movie_id').unsigned().notNullable()
    table.foreign('movie_id').references('id').inTable('movies').onDelete('CASCADE')

    table.unique(['actor_id', 'movie_id'])
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('actor_movie')
}
