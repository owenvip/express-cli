'use strict';
const http = require('../utils/httpUtils');
const dataUtils = require('../public/lib/dataUtils');
const namespace = require('./namespace');
module.exports = function (app) {
  app.get(`${namespace.root}`, async function (req, res) {
    // let [keywordList] = await Promise.all([
    //   http.get('/api/hotkeyword', {}),
    // ]);
    res.render('index', {
      resUrl: 'http://localhost:8888',
      dataUtils
    });
  });

  app.get(`${namespace.root}test`, async function (req, res) {
    var uscode = req.query.uscode;
    let [down, up, info] = await Promise.all(
      [
        http.get('/api/externalInvest', {
          usCode: uscode,
          type: 'child'
        }),
        http.get('/api/externalInvest', {
          usCode: uscode,
          type: 'parent'
        }),
        http.get('/api/detail', {
          usCode: uscode
        }),
      ]
    );
    res.render('test', {
      up: up.data,
      down: down.data,
      info: info.data
    });
  });
};