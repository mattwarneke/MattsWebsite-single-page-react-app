import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

export class JoJosAdventure extends React.Component {
    constructor(props) {
        super(props);

        this.unityContent = new UnityContent(
            "JoJosAdventure/Build/WebGL.json",
            "JoJosAdventure/Build/UnityLoader.js", {
                adjustOnWindowResize: true
            }
        );
        this.state = {
            progression: 0,
            isLoading: true,
            score: 0
        }
        this.unityContent.on("loaded", () => {
            this.setState({
                isLoading: false
            });
        });
        this.unityContent.on("progress", progression => {
            this.setState({
                progression: progression
            });
        });
        //unityContent.on("ScoreUpdate", score => {
        //    this.setState({
        //        score: score
        //    });
        //});
    }

    render() {
        return (
            <div>
                <div> {
                    this.state.isLoading === true
                        ? "Loading " + this.state.progression * 100 + " percent..."
                        : 'Loaded, enjoy!'
                }
                </div>
                <Unity unityContent={this.unityContent} />
            </div>
        )
    }
}

export default JoJosAdventure;