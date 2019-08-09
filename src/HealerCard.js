import React from 'react'


class HealerCard extends React.Component{

    render(){
        return(
            <div className="ui card">
                <div className="image">
                <img src={this.props.healer.image}/>
                </div>
                <div className="content">
                <a className="header">{this.props.healer.name}</a>
                
                <div className="description">
                    {this.props.healer.description}
                </div>
                </div>
              
          </div>
        )
    }



    }


export default HealerCard;