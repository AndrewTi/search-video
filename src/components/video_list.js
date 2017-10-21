import React, { Component }  from "react";
import VideoListItem from "./video_list_item.js";

export default class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="video-list">
                {console.log(this.props.videos.length)};
                {this.props.videos.map(e => {
                    console.log(e);
                    return (
                        <VideoListItem key={e.etag} video={e} />
                    )
                })}
            </ul>
        )
    }
}