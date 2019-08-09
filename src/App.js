import React from 'react';
import HealerContainer from './HealerContainer';
import SearchBar from './SearchBar';
import NewHealerForm from './NewHealerForm'

class App extends React.Component {

  handleSearch= (e) => {
    //get the search term
    //set state to new search term
    this.setState({searchTerm: e.target.value})
  }

    addNewHealer= (newHealerObject) => {
    //be able to create a new healers array out of the previous one

    let newHealers = [...this.state.healers, newHealerObject]
    
    this.setState({healers: newHealers}, this.persistHealer(newHealerObject))

  }
  
  persistHealer(newObject){
    //fetch for POST 
    //try completing this part on your own!

  }


  render(){
    return (
      <div className="App">
        <SearchBar /> 
        <NewHealerForm />  
        <HealerContainer /> 
      </div>
    );
  }


}


export default App;
