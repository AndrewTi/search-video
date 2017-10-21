import React, { Component }  from "react";
import { render as Render } from "react-dom";
import YTsearch from "youtube-api-search";

import VideoList from "./components/video_list.js"
import SearchBar from "./components/search_bar.js";
import { youtube } from "./config/config.js";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        YTsearch({key: youtube.apiKey, term: "react"}, (videos) => {
            this.setState({videos});
        })
    };



    render() {
        return <div> 
            Hi nigga
            <SearchBar />
            <VideoList videos={this.state.videos}/>
        </div>;
    }
}



Render(<App />, document.getElementById("app"));