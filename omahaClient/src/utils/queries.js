import { gql } from '@apollo/client';

export const QUERY_GAMES = gql`
  query getGames {
    games {
      _id
      season
      away_team
      away_points
      home_team
      home_points
      home_id
      away_id
    }
  
  }
`;

// export const QUERY_SINGLE_GAME = gql`
//   query getSingleGame($gameId: ID!) {
//     game(gameId: $gameId) {
//       _id

//     }
//   }
// `