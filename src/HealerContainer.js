import React from 'react'
import HealerCard from './HealerCard'
import { connect } from 'react-redux'

class HealerContainer extends React.Component{


  componentDidMount(){

    fetch('http://localhost:3000/healers')
    .then(res => res.json())
    .then(data => this.props.allHealers(data))
  }

  filteredHealers(){
    return this.props.healers.filter(healer => healer.description.toLowerCase().includes(this.props.searchTerm))
  }
      render(){
        return(
            <div className="ui two column centered grid">  {this.filteredHealers().map(healer=> <div className="five wide column"><HealerCard healer={healer}/> </div>)}
            </div>
        )
      }

    }

 const mapStateToProps = state =>{
    return state
 }

 const mapDispatchToProps = dispatch =>{
   return {allHealers: (healers)=> dispatch({type:'ADD_ALL_HEALERS', value: healers})
  }
 }

const ConnectedHealerContainer = connect(mapStateToProps, mapDispatchToProps)(HealerContainer)

export default ConnectedHealerContainer;