const db = require('../config/connection');
const { Game } = require('../models');
const gameData = require('./games.json');

db.once('open', async () => {
  const games = await Game.insertMany(gameData);

  console.log('*****Game data has been seeded*********');
  process.exit(0);
});


// need to grab home and away scores from db for each game map over scores and sort high and low number then asign values to corresponding table id

// example game object from games.json
// {
//   "season": 2022,
//   "away_team": "Iowa State",
//   "away_points": 14,
//   "home_team": "TCU",
//   "home_points": 62,
//   "id": 401404120,
//   "home_id": 2628,
//   "away_id": 66
// },

// db.collection.find()  dot notation; e.g. "field.nestedfield": <value>