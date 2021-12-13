exports.up = function(knex) {
return knex.schema.createTable("participacoes",(table) => {
   table.increments().primary();
   table.integer("artistas_id").references("artistas.id");
   table.integer("musicas_id").references("musicas.id");
   
    
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("participacoes");
};

