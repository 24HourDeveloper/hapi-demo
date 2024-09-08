/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.alterTable('actor_movie', function(table) {
    table.dropUnique(['actor_id', 'movie_id'])
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.alterTable('actor_movie', function(table) {
    table.unique(['actor_id', 'movie_id'])
  })
}
