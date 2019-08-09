import React from 'react'
import { connect } from 'react-redux';

class SearchBar extends React.Component{

    render(){
        return(
            <div className="ui two item menu">
                <h4 className="item">Natural Healing Directory</h4>

                <div className="ui large icon input">
                    <i className="search icon"></i>
                    <input onChange = {(e)=> this.props.updateSearch(e.target.value) }name="search" type="text" placeholder="Search..."/>
                </div>
            </div>
        )
    }
}

//state argument is equivalent to store.getState()
const mapStateToProps = state  =>{

    return {searchTerm: state.searchTerm}
}

//dispatch argument is equivalent to store.dispatch()
const mapDispatchToProps = dispatch => {

    return {updateSearch: (search)=> dispatch({type: 'CHANGE_SEARCH', value: search})}
}

const ConnectedSearchBar = connect(mapStateToProps,mapDispatchToProps)(SearchBar)

export default ConnectedSearchBar;