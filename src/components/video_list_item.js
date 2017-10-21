import React, { Component }  from "react";

export default class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <div>
                    <div> {console.log(this.props.video)}
                        <img src={this.props.video.snippet.thumbnails.default.url}/>
                    </div>

                    <div>
                        {this.props.video.snippet.title}
                    </div>
                </div>
            </li>
        )
    }
}