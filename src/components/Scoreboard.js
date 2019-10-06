import React from 'react';
import './../css/ScoreBoard.css'

class ScoreBoard extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }
    componentDidMount() {
        fetch(`http://localhost:8085/scores/scoreobject/`)
            .then(result => result.json())
            .then(items => this.setState({ items }))
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
                        this.state.items.length > 0 ?

                            this.state.items.map((score) => (
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
                                <td>Loading...</td>
                                <td>Loading...</td>
                                <td>0</td>
                            </tr>
                        }
                        </tbody>
                </table>
            </div>
        )
    }
}

export default ScoreBoard;