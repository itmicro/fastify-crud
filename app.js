'use strict'
require('dotenv').config()
const path = require('path')
const AutoLoad = require('@fastify/autoload')
const {verify} = require ('jsonwebtoken')
const multer = require('fastify-multer') // or import multer from 'fastify-multer'


require('./src/database/mongoose')

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application



  fastify.register(multer.contentParser)

  fastify.register(require('@fastify/cors'), (instance) => {
    return (req, callback) => {
      const corsOptions = {
        // This is NOT recommended for production as it enables reflection exploits
        origin: true
      };

      // do not include CORS headers for requests from localhost
      if (/^localhost$/m.test(req.headers.origin)) {
        corsOptions.origin = true
      }

      // callback expects two parameters: error and options
      callback(null, corsOptions)
    }
  })






  fastify.decorate("authenticate", async function (request, reply) {
   const { headers: {authorization} } = request;
    console.log('jwt Sign')
    if (authorization){
        const token = authorization.split(' ')[1]
        verify(token, process.env.JWT_SECRET, (err) => {
            if (err) {
              reply.sendStatus(403).send('not authorized')
                return 
            }
        })
        return 
    }

    return reply.sendStatus(403)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'src/plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'src/routes'),
    options: Object.assign({}, opts)
  })
}
