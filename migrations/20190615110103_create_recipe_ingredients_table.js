
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl.integer('recipe_id').unsigned().references('id').inTable('recipes')
            .onDelete('RESTRICT').onUpdate('CASCADE');
        tbl.integer('ingredient_id').unsigned().references('id').inTable('ingredients')
            .onDelete('RESTRICT').onUpdate('CASCADE');
        tbl.integer('quantity').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropIfTableExists('recipe_ingredients');
};
