const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    id: {
        type: Number,
        required: true,
      },
    season: {
    type: Number,
    required: true,
    trim: true,
  },
  away_team: {
    type: String,
    required: true,
  },
  away_points: {
    type: Number,
    required: true,
  },
  home_team: {
    type: String,
    required: true,
  },
  home_points: {
    type: Number,
    required: true,
  },
  home_id: {
    type: Number,
    required: true,
  },
  away_id: {
    type: Number,
    required: true,
  },
});

const Game = model('Game', gameSchema);

module.exports = Game;