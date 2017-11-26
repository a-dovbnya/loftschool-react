import React, {PureComponent} from "react";
import "./Show.css";

export default class ShowPageMarkup extends PureComponent{
    render(){
        const {showItem} = this.props;
        const cast = showItem._embedded.cast;

        return (
            <div className = "show-page">
                <div className = "show-page-main">
                    <h3 className = "show-page-main__title">{showItem.name}</h3>
                    {showItem.image ?
                        <img src={showItem.image.medium} alt={showItem.name}/>
                    :
                        null
                    }
                    <div className="show-page-main__descript" dangerouslySetInnerHTML={{__html: showItem.summary}} />
                </div>
                <div className="actors">
                    {cast.map((actor,index) => (
                        <div key={showItem.id+'_'+actor.person.id+index} className="actor">
                            <div>{actor.person.name}</div>
                            {actor.person.image ? 
                                <img src = {actor.person.image.medium} alt={actor.person.name}/>
                            :
                                <div className="actor__no-img">No photo</div>
                            }
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}