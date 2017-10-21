import React, { Component }  from "react";

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: "asd" };
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    onChange={ event => this.setState({term: event.target.value}) } />
            </div>
        );
    }
}
