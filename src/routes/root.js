"use strict";
const multer = require('fastify-multer') // or import multer from 'fastify-multer'
const upload = multer({ dest: 'static/' })
const path = require('path')

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return "this is an example";
  });





  fastify.post("/", { preHandler: upload.single('avatar') }, async function (request, reply) {
    return "this is an example";
  });

  
};
