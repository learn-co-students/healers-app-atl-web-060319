import React from 'react';
import SearchBar from './SearchBar';
import HealerContainer from './HealerContainer';
import healers from './healer-data.js';


class App extends React.Component{

  constructor(){
    super()
    this.state = 
    {
        healers: healers,
        searchTerm: ""
    }
}

  handleSearch = (e)=>{
    this.setState({searchTerm: e.target.value})
    // let searched = this.state.healers.filter(healer => healer.description.includes(e.target.search))
    // this.setState({searchHealers: searched})

  }

  filterSearch = ()=>{
    return this.state.healers.filter(healer => healer.description.toLowerCase().includes(this.state.searchTerm))

  }
  
  
  render(){
  return (
      <div className="App">
        <SearchBar handleSearch={this.handleSearch}/>
        <HealerContainer healers={this.filterSearch()}/> 
      </div>
    );
  }
}
export default App;
