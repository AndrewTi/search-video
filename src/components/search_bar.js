import React, { Component }  from "react";

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    onChange={ event => { this.props.onSearch(event.target.value) } } />
            </div>
        );
    }
}
