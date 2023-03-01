'use strict'
const product = require('../../../../controllers/product.js');
module.exports = async function (fastify, opts) {

  fastify.get('/:id',product.getAll)
  fastify.get('/',product.getAll)
  
  fastify.post('/',{onRequest: [fastify.authenticate]},product.create)
  fastify.put('/:id',{onRequest: [fastify.authenticate]},product.update)
  fastify.delete('/:id',{onRequest: [fastify.authenticate]},product.delete)
}
