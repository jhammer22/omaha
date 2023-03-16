const db = require('../config/connection');
const { Game } = require('../models');
const gameData = require('./games.json');

db.once('open', async () => {
  const games = await Game.insertMany(gameData);

  console.log('*****Game data has been seeded*********');
  process.exit(0);
});

