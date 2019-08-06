import React from 'react'


function SearchBar(props){

        return(
            <div className="ui two item menu">
                <h4 className="item">Natural Healing Directory</h4>

                <div className="ui large icon input">
                    <i className="search icon"></i>
                    <input onChange={props.handleSearch} name="search" type="text" placeholder="Search..."/>
                </div>
            </div>
        )
}


export default SearchBar;