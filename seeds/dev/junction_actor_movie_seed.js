/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('actor_movie').del()
  await knex('actor_movie').insert([
    { actor_id: 1, movie_id: 1 },
    { actor_id: 1, movie_id: 44 },
    { actor_id: 2, movie_id: 1 },
    { actor_id: 2, movie_id: 8 },
    { actor_id: 3, movie_id: 1 },
    { actor_id: 3, movie_id: 69 },
    { actor_id: 4, movie_id: 3 },
    { actor_id: 4, movie_id: 3 },
    { actor_id: 5, movie_id: 2 },
    { actor_id: 5, movie_id: 68 },
    { actor_id: 6, movie_id: 6 },
    { actor_id: 6, movie_id: 64 },
    { actor_id: 7, movie_id: 6 },
    { actor_id: 8, movie_id: 9 },
    { actor_id: 9, movie_id: 15 },
    { actor_id: 9, movie_id: 23 },
    { actor_id: 10, movie_id: 10 },
    { actor_id: 11, movie_id: 19 },
    { actor_id: 12, movie_id: 71 },
    { actor_id: 13, movie_id: 43 },
    { actor_id: 14, movie_id: 29 },
    { actor_id: 14, movie_id: 34 },
    { actor_id: 15, movie_id: 11 },
    { actor_id: 16, movie_id: 7 },
    { actor_id: 17, movie_id: 40 },
    { actor_id: 18, movie_id: 26 },
    { actor_id: 19, movie_id: 36 },
    { actor_id: 20, movie_id: 30 },
    { actor_id: 21, movie_id: 62 },
    { actor_id: 21, movie_id: 63 },
    { actor_id: 22, movie_id: 12 },
    { actor_id: 22, movie_id: 37 },
    { actor_id: 23, movie_id: 25 },
    { actor_id: 23, movie_id: 79 },
    { actor_id: 24, movie_id: 33 },
    { actor_id: 24, movie_id: 18 },
    { actor_id: 25, movie_id: 21 },
    { actor_id: 26, movie_id: 48 },
    { actor_id: 27, movie_id: 61 },
    { actor_id: 28, movie_id: 27 },
    { actor_id: 29, movie_id: 57 },
    { actor_id: 30, movie_id: 42 }
  ]);
}
