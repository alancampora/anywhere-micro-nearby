const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    nearbyCities = require("nearby-cities"),
    config = {
        server: {
            ip: '127.0.0.1',
            port: '3600'
        }
    }

app.use(bodyParser.json());

app.listen(config.server.port, config.server.ip, (err) => {
    if (err) console.log(err);
    console.log('server listening at', config.server.ip, config.server.port);
});

app.get('/get/', (req, res) => {

    const query = req.query;
    console.log(query);
    const cities = nearbyCities({
        latitude: parseInt(query.lat),
        longitude: parseInt(query.lon)
    }, parseInt(query.radius));

    console.log("results",cities.length);
    return res.json(cities)
});
