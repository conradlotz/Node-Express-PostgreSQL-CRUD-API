var express = require('express');
var router = express.Router();

var db = require('../server/db');

router.get('/api/players', db.getAllPlayers);
router.get('/api/players/:id', db.getSinglePlayer);
router.post('/api/players', db.createPlayer);
router.put('/api/players/:id', db.updatePlayer);
router.delete('/api/players/:id', db.deletePlayer);

module.exports = router;