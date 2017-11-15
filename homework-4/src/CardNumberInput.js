import React, {Component} from 'react';

class CardNumberInput extends Component {


  constructor(props){
    super(props);
    
    const num = this.format(this.props.cardNumber);

    this.state = {
      number: num
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({number: this.format(nextProps.cardNumber)});
  }

  format = (str) => {
    let rezStr = '';

    if(str){
      String(str).split("").map( (el, index) => {
        ((index+1)%4 === 0) ? rezStr += el+" " : rezStr += el;
      });
    }

    return rezStr;
  }

  normalize = (str) => {
    return str.split(" ").join("");     
  }

  handleChange = (event) => {
    const {onChange} = this.props;
    onChange( this.normalize( event.target.value ) );
  }  
  
  render() {
    return (
      <input onChange={this.handleChange} value={this.state.number}/>
    );
  }
}

export default CardNumberInput;
