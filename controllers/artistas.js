 const knex =require("../database/connection")

  exports.getAll = async function( req, res){
   const artistas = await knex("artistas");
   const artistasComImagem = artistas.map((artista) => {
   artista.imagem = `${process.env.ARTISTAS_UPLOADS}/${artista.imagem}`;
   return artista;
   });
  res.json(artistasComImagem);
};

exports.getBymusica = async function( req, res){
  const artistas = await knex("artistas")
  .join("participacoes","participacoes.artistas_id","artistas.id")
  .join("musicas","musicas.id","participacoes.musicas_id")
  .where({"musicas.id": req.params.id})
  .select("artistas.*");

  const artistasComImagem = artistas.map((artista) => {
  artista.imagem = `${process.env.ARTISTAS_UPLOADS}/${artista.imagem}`;
  return artista;
  });
 res.json(artistasComImagem);
};
exports.getOne = async function( req, res){
const artista =( 
  await knex("artistas").where({id: req.params.id})
  )[0];
  artista.imagem = `${process.env.ARTISTAS_UPLOADS}/${artista.imagem}`;
  if(req.query.musicas === "true"){
    const musicas = await knex("musicas")
    .join("participacoes","participacoes.musicas_id", "musicas.id")
    .join("artistas","artistas.id","participacoes.artistas_id")
    .where({ "artistas.id": req.params.id})
    .select("musicas.*");
    artista.musicas = musicas;
  }
  res.json(artista);
};

exports.create = async function( req, res){

  req.body.imagem = req.file.filename;
  const result = await knex("artistas").insert (req.body);
  res.json(result);
    };

  exports.update = async function( req, res){
    res.json(
      await knex("artistas").where({id: req.params.id}).update(req.body)
    );
    };

    exports.remove = async function( req, res){
      res.json (await knex("artistas").where({id: req.params.id}).del());
    };