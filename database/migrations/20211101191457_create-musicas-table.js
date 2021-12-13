exports.up = function(knex) {
    return knex.schema.createTable("musicas",(table) => {
        table.increments().primary();
        table.string("titulo");
        table.string("sinopse");
        table.string("imagem");
        table.integer("ano").unsigned();
        table.timestamps(true, true);
        });
    };
    
    exports.down = function(knex) {
        return knex.schema.dropTable("musicas");
    };
    
