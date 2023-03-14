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
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
