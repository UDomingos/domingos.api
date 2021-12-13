
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('musicas').del()
    .then(function () {
      // Inserts seed entries
      return knex('musicas').insert([
        {
        titulo:"Bellaquita",
        sinopse:"musicas em espanhol",
        imagem:"anita.jpg",
        ano:"2020"
      },
        {
          titulo:"Vai malandra",
          sinopse:"funk",
          imagem:"anita.jpg"
          ,ano:"2017"
        },
        {
          titulo:"Bola rebola",
          sinopse:"musicas de funk",
          imagem:"anita.jpg",
          ano:"2019"
        },
        {
          titulo:"Todos os cantos",
          sinopse:"Sertanejo sofrencia",
          imagem:"Marilia.jpg",
          ano:"2019"
        },
      ]);
    });
};
