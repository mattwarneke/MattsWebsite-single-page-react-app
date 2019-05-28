import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

export class LabyrinthTD extends React.Component {
    constructor(props) {
        super(props);

        this.unityContent = new UnityContent(
            "LabyrinthTD/Build/WebGL.json",
            "LabyrinthTD/Build/UnityLoader.js"
        );
        this.state = {
            progression: 0,
            isLoading: true
        }
        this.unityContent.on("loaded", () => {

            // Now we can for example hide the loading overlay.

            this.setState({
                isLoading: false
            });


        });
        this.unityContent.on("progress", progression => {

            // Now we can use the progression to for example
            // display it on our React app.

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
                        ? 'Loading ${this.state.progression * 100} percent...'
                        : 'Loaded - Wait 2 seconds for the menu'
                    }
                </div>
                <Unity id="labTd" unityContent={this.unityContent} />
            </div>
        )
    }
}
    
export default LabyrinthTD;