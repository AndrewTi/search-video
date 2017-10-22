import React, { Component }  from "react";
import { render as Render } from "react-dom";
import YTsearch from "youtube-api-search";
import _ from "lodash";

import VideoDetail from "./components/video_detail.js";
import VideoList from "./components/video_list.js";
import SearchBar from "./components/search_bar.js";
import { youtube } from "./config/config.js";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: [], selected: null};

        YTsearch({key: youtube.apiKey, term: "react js"}, (videos) => {
            this.setState({videos, selected: videos[0]});
        })
    };

    videoSearch(term) {
        YTsearch({key: youtube.apiKey, term: term}, (videos) => {
            this.setState({videos, selected: videos[0]});
        })
    }

    render() {
        const videoSearch2 = _.debounce((term) => {console.log(term); this.videoSearch(term)}, 300);

        return <div> 
            <SearchBar onSearch={term => { videoSearch2(term) }}/>
            <VideoDetail video={this.state.selected}/>
            <VideoList 
                onVideoSelect={select => this.setState({selected: select})} 
                videos={this.state.videos}/>
        </div>;
    }
}



Render(<App />, document.getElementById("app"));