'use strict'
const auth = require('../../../../controllers/auth.js');
module.exports = async function (fastify, opts) {


  fastify.post('/signup',auth.signUP)
  fastify.post('/login',auth.login)
  fastify.post('/logout',{onRequest: [fastify.authenticate]},auth.logout)
  fastify.post('/token/refresh',{onRequest: [fastify.authenticate]},auth.refreshToken)
}
