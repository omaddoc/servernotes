exports.seed = function(knex) {
  return knex('items').insert([
    { name: 'item 1' },
    { name: 'item 2' },
    { name: 'item 3' },
  ]);
};
