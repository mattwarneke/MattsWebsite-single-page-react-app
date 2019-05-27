import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

export class LabyrinthTD extends React.Component {
    constructor(props) {
        super(props);

        this.unityContent = new UnityContent(
            "LabyrinthTD/Build/WebGL.json",
            "LabyrinthTD/Build/UnityLoader.js"
        );
    }

    render() {
        return <Unity unityContent={this.unityContent} />;
    }
}

export default LabyrinthTD;