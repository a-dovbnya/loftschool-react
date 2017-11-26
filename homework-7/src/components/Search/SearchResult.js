import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";

export default class SearchResult extends PureComponent {
    render(){

        const {name, summary, id} = this.props.data;

        return (
            <div className="search-result__item">
                <Link to={`/shows/${id}`}><h3>{name}</h3></Link>
                {this.props.data.image ? 
                    <Link to={`/shows/${id}`}><img src={this.props.data.image.medium} alt={name}/></Link>
                    :
                    null
                }
                <div className="search-result__descript" dangerouslySetInnerHTML={{__html: summary}} />
                
            </div>
        );
    }
}