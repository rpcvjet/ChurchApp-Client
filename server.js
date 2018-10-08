'use strict';

const express = require('express')

express()
  .use(express.static(__dirname + '/dist'))
  .get('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'))
  .listen(process.env.PORT, () => {
    console.log('server up', process.env.PORT)
  })