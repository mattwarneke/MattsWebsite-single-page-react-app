import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

export class LabyrinthTD extends React.Component {
    constructor(props) {
        super(props);

        this.unityContent = new UnityContent(
            "LabyrinthTD/Build/WebGL.json",
            "LabyrinthTD/Build/UnityLoader.js", {
                adjustOnWindowResize: true
            }
        );
        this.state = {
            progression: 0,
            isLoading: true
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
    }

    render() {
        return (
            <div style={{ width: "75%",  height: "640px", marginLeft: "auto", marginRight: "auto", paddingBottom: "30px" }}>
                <div> {
                    this.state.isLoading === true
                        ? "Loading " + this.state.progression * 100 + " percent..."
                        : 'Loaded, enjoy!'
                    }
                </div>
                <Unity id="labTd" unityContent={this.unityContent} />
            </div>
        )
    }
}
    
export default LabyrinthTD;