'use strict'
const category = require('../../../../controllers/category.js');
module.exports = async function (fastify, opts) {

  fastify.get('/:id',category.getAll)
  fastify.get('/',category.getAll)
  
  fastify.post('/',{onRequest: [fastify.authenticate]},category.create)
  fastify.put('/:id',{onRequest: [fastify.authenticate]},category.update)
  fastify.delete('/:id',{onRequest: [fastify.authenticate]},category.delete)
}
