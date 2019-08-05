import React from 'react'


class SearchBar extends React.Component{

    render(){
        return(
            <div className="ui two item menu">
                <h4 class="item">Natural Healing Directory</h4>

                <div className="ui large icon input">
                    <i class="search icon"></i>
                    <input name="search" onChange={this.props.handleSearch} type="text" placeholder="Search..."/>
                </div>
            </div>
        )
    }
}

export default SearchBar;