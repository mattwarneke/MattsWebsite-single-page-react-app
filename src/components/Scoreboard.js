import React from 'react';
import './../css/ScoreBoard.css'

class ScoreBoard extends React.Component {
    constructor() {
        super();
        this.state = { scores: [] };
    }
    componentDidMount() {
        fetch(`http://localhost:8085/scores/scoreobject/`)
            .then(result => result.json())
            .then(scores => this.setState({ scores }))
    }
    render() {
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
                        this.state.scores.length > 0
                            ?
                                this.state.scores.map((score) => (
                                    <tr>
                                        <td>1st</td>
                                        <td>{score.User}</td>
                                        <td>{score.Level}</td>
                                        <td>{score.Score}</td>
                                    </tr>
                                ))
                            :
                                <tr>
                                    <td>1st</td>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                </tr>
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ScoreBoard;