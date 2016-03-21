"use strict";

var express = require('express'),
    bodyParser  = require('body-parser'),
    api = require('./api'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/server/api/cats', api.fetchCats);
app.get('/server/api/cats/:id', api.fetchCat);
app.post('/server/api/cats', api.addCat);
app.put('/server/api/cats/:id', api.updateCat);
app.delete('/server/api/cats/:id', api.deleteCat);

var server = app.listen(3000, function () {
    var host = server.address().address,
        port = server.address().port;

    console.log('Server running at http://%s:%s', host, port);
});
