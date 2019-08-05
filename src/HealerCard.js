import React from 'react'

function HealerCard(props){


        const {name, image, description} = props.healer

        return(
            <div className="ui card">
                <div className="image">
                <img src={image}/>
                </div>
                <div className="content">
                <a className="header">{name}</a>
               
                <div className="description">
                    {description}
                </div>
                </div>
          </div>
        )


}

export default HealerCard;