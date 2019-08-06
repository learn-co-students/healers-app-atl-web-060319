import React from 'react';
import HealerContainer from './HealerContainer';
import SearchBar from './SearchBar';
import healers from './healer-data.js'


class App extends React.Component {

  constructor(){
    super()
    this.state = {
        healers : healers, 
        searchTerm : ""
      }
  }

  handleSearch = (e)=>{
    debugger;
    this.setState({searchTerm: e.target.value})

  }

  filterHealers(){
    return this.state.healers.filter(healer => healer.description.toLowerCase().includes(this.state.searchTerm))
  }

  render(){
    return (
      <div className="App">
        <SearchBar handleSearch={this.handleSearch}/> 
        <HealerContainer  healers = {this.filterHealers()}/> 
      </div>
    );
  }


}


export default App;
