"use strict";

const tableName = "student";

exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("cpf").notNullable();
    table.integer("id_colegio").references("school.id").defaultTo(1);
    table.integer("id_turma").references("school_class.id").defaultTo(1);
    table.float("score", 3, 2).notNullable().defaultTo(0);
    table.string("email").nullable();
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
