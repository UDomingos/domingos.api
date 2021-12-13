 const knex =require("../database/connection")

  exports.getAll = async function( req, res){
   const musicas = await knex("musicas");
   const musicasComImagem = musicas.map((musica) => {
    musica.imagem = `${process.env.MUSICAS_UPLOADS}/${musica.imagem}`;
   return musica;
   });
  res.json(musicasComImagem);
};

exports.getByartista = async function( req, res){
  const musicas = await knex("musicas")
  .join("participacoes","participacoes.musicas_id","musicas.id")
  .join("artistas","artistas.id","participacoes.artistas_id")
  .where({"artistas.id": req.params.id})
  .select("musicas.*");

  const musicasComImagem = musicas.map((musica) => {
  musica.imagem = `${process.env.MUSICAS_UPLOADS}/${musica.imagem}`;
  return musica;
  });
 res.json(musicasComImagem);
};
exports.getOne = async function( req, res){
const musica =( 
  await knex("musicas").where({id: req.params.id})
  )[0];
  musica.imagem = `${process.env.MUSICAS_UPLOADS}/${musica.imagem}`;
  if(req.query.musicas === "true"){
    const artistas = await knex("artistas")
    .join("participacoes","participacoes.artistas_id", "artistas.id")
    .join("musicas","musicas.id","participacoes.musicas_id")
    .where({ "musicas.id": req.params.id})
    .select("artistas.*");
    musica.artistas = artistas;
  }
  res.json(musica);
};

exports.create = async function( req, res){
  req.body.imagem = req.file.filename;
  const result = await knex("musicas").insert (req.body);
  res.json(result);
  };

  exports.update = async function( req, res){
    res.json(
      await knex("musicas").where({id: req.params.id}).update(req.body)
    );
    };

    exports.remove = async function( req, res){
      res.json (await knex("musicas").where({id: req.params.id}).del());
    };