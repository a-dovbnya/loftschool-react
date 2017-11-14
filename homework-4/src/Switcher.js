import React, {Component} from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0,
  }
  handleChangeChild = (event) =>{
    this.setState({selectedChild: parseInt(event.target.getAttribute("data-id"))});
  }
 
  render() {

    const childrens = React.Children.toArray(this.props.children);
    const {selectedChild} = this.state;

    return (
    <div>
      <nav>
        <ul className="component-list">
          {childrens.map( (child, index)=> (
            <li className="component-list__name"  data-id={index} key={child.props.text} onClick = {this.handleChangeChild}>{ (child.type.displayName) ? child.type.displayName : child.type.name }</li>
          ))}
        </ul>
      </nav>
      <hr/>
      <div className="component-wrapper">
        { childrens[selectedChild] }
      </div>
    </div>);
  }
}

export default Switcher;
