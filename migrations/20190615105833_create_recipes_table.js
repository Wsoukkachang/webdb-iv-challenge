
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable().unique();
        tbl.integer('dish_id').unsigned().references('id').inTable('dishes')
            .onDelete('CASCADE').onUpdate('CASCADE');
        tbl.string('instructions', 500);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
