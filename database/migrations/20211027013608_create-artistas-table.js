exports.up = function(knex) {
return knex.schema.createTable("artistas",(table) => {
    table.increments().primary();
    table.string("nome");
    table.string("descricao");
    table.string("imagem");
    table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("artistas");
};
