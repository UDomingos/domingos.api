
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('artistas').del()
    .then(function () {
      // Inserts seed entries
      return knex('artistas').insert([
        {
          nome:"Anita",
        descricao:"Fanqueira",
         imagem:"anita.jpg"
        },
        {
          nome:"Ivete Sangalo",
          descricao:"Cantora de Reggae/pop", 
          imagem:"ivetesangalo.jpg" 
        },
        {
           nome:"Roberta Miranda",
           descricao:"Rainha do Sertanejo",
            imagem:"robertamiranda.jpg"
          },
          {
            nome:"iza",
            descricao:"R&B",
             imagem:"iza.jpg"
           },
           {
            nome:"Marilia Mendonca",
            descricao:"Rainha da sofrencia",
             imagem: "mariliamendoca.jpg"
           },

      ]);
    });
};
