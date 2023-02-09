import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

export class JoJosAdventure extends React.Component {
    constructor(props) {
        super(props);

        this.unityContent = new UnityContext({
          loaderUrl: "JoJosAdventure/Build/WebGL.loader.js",
          dataUrl: "JoJosAdventure/Build/WebGL.data",
          frameworkUrl: "JoJosAdventure/Build/WebGL.framework.js",
          codeUrl: "JoJosAdventure/Build/WebGL.wasm",
        });
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
                <div >
                    <div className="loadingFullScreen">
                    {
                        this.state.isLoading === true
                            ? "Loading " + this.state.progression * 100 + " percent..."
                            : <span onClick={() => this.fullScreen()} style={{ cursor: "pointer" }}>
                                <FontAwesomeIcon icon={faExpand} />  Fullscreen
                              </span>
                    }
                    </div>
                    <Unity id="jojos" 
                        unityContext={this.unityContent}
                        style={{
                            height: 600,
                            width: 960,
                            border: "2px solid black",
                            background: "grey",
                            display: "inline",
                          }} />
                </div>
            </div>
        )
    }
}

export default JoJosAdventure;