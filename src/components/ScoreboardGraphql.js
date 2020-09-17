import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import './../css/ScoreBoard.css'


export default function ScoreboardGraphql() {
  const { data, loading, error } = useQuery(scoresListQuery);
  if (loading) return <p>LOADING...</p>;
  if (error) return <p>ERROR</p>;

  return (
    <div>
      <table>
        <caption>Top 10 Scores - LabyrinthTD</caption>
        <thead>
          <tr>
            <th scope="column">Rank</th>
            <th scope="column">Player</th>
            <th scope="column">Level</th>
            <th scope="column">Score</th>
          </tr>
        </thead>
        <tbody>
          {
            data.scores.map(score => (
              <tr>
                <td>1st</td>
                <td>{score.user}</td>
                <td>{score.level}</td>
                <td>{score.score}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
  </div>
  );
}

const scoresListQuery = gql`
query
{
  scores {
    score
    user
    level
    version
  }
}
`;