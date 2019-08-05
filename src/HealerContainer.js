import React from 'react';
import HealerCard from './HealerCard';


class HealerContainer extends React.Component{



    render(){
        return(
            <div className="ui two column centered grid">
                    {this.props.healers.map(healer=> <div className="five wide column"><HealerCard healer={healer}/> </div>)}
            </div>

        )

    }


}

export default HealerContainer;