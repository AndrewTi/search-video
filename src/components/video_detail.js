import React, { Component }  from "react";

export default class VideoDetail extends Component {
    constructor(props){
        super(props);

        this.baseUrl = "https://www.youtube.com/";
    }

    render() {
        const video = this.props.video;

        return this.loading(video);
    }

    loading(video) {
        if(video) {
            return (
                <div>
                    <div>
                        <iframe src={this.baseUrl +"embed/" + video.id.videoId}></iframe>
                    </div>

                    <div>
                        <p>{video.snippet.title}</p>
                        <div>
                            {video.snippet.description}
                        </div>
                    </div>
                </div>
            )
        }

        return (<div> Loading </div>);
    }
}