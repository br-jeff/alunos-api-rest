"use strict";

const tableName = "school";

exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("street").notNullable();
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
