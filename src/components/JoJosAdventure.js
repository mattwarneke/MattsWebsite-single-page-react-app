import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

export class JoJosAdventure extends React.Component {
    constructor(props) {
        super(props);

        this.unityContent = new UnityContent(
            "JoJosAdventure/Build/WebGL.json",
            "JoJosAdventure/Build/UnityLoader.js"
        );
    }

    render() {
        return <Unity unityContent={this.unityContent} />;
    }
}

export default JoJosAdventure;