"use strict"
var express = require('express');
var router = express.Router();
var trolleyRaceDb = require('../../server.services/trolleyRaceDb')();
var googleAuth = require('../../server.services/googleOAuth')();
var outcomeController = require('./outcomeController')(trolleyRaceDb, googleAuth);

// Invades privacy
// router.get('/email_list', function (req, res) {
//     outcomeController.getEmailAddressList(function (response) {
//         res.send(response);
//     });
// });

router.get('/', function (req, res) {
    outcomeController.getOutcomeList(function (response) {
        res.send(response);
    });
});

router.post('/', function (req, res) {
    outcomeController.updateOutcome(req.body, function (response) {
        res.send(response);
    });
});

module.exports = router;