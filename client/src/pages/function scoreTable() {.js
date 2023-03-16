function scoreTable() {
  const scores = gamesData.games.filter((game) => {
      // let homeScores = game.home_points;
      // let awayScores = game.away_points;
      // console.log(homeScores);
      // console.log(awayScores);
      // for (let i = 0; i < game.length; i++) {
          let appendVal = appendVal 
          console.log(game);
          if (game.home_points > game.away_points) {
              appendVal = 'r' + game.away_points + '-c' + game.home_points
              document.getElementById(appendVal).setAttribute("style", "background-color: #BF5700");
              
          } else if (game.home_points < game.away_points) {
              appendVal = 'r' + game.home_points + '-c' + game.away_points
              document.getElementById(appendVal).setAttribute("style", "background-color: #BF5700");
          }
      // } //return game;
  })
 
  console.log(scores);
};
// scoreTable();