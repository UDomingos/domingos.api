
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('participacoes').del()
    .then(function () {
      // Inserts seed entries
      return knex("participacoes").insert([
        {artistas_id: 1, musicas_id:1},
        {artistas_id: 1,musicas_id:2 },
        {artistas_id: 2, musicas_id:1},
        {artistas_id: 2, musicas_id:2},
        {artistas_id: 3, musicas_id:2},
        {artistas_id: 4, musicas_id:2},
        {artistas_id: 5, musicas_id:3},
      ]);
    });
};
