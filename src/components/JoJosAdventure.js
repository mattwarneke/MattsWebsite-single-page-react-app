import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

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
        this.fullScreen = this.fullScreen.bind(this);
    }

    fullScreen() {
        this.unityContent.setFullscreen(true);
    }

    render() {
        return (
            <div>
                {this.props.ContentBlurb}
                <div>
                    <div className="loadingFullScreen">
                    {
                        this.state.isLoading === true
                            ? "Loading " + this.state.progression * 100 + " percent..."
                            : <span onClick={() => this.fullScreen()} style={{ cursor: "pointer" }}>
                                <FontAwesomeIcon icon={faExpand} />  Fullscreen
                              </span>
                    }
                    </div>
                    <Unity unityContent={this.unityContent} />
                </div>
            </div>
        )
    }
}

export default JoJosAdventure;