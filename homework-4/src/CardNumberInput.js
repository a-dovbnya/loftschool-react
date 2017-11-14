import React, {Component} from 'react';

class CardNumberInput extends Component {


  constructor(props){
    super(props);
    console.log(constructor);
    const num = this.format(this.props.val);
    console.log("num = ", num);
    this.state = {
      number: num
    }
  }

  componentWillReceiveProps(nextProps){
    console.log("receiveProps, num= ", nextProps.val);
    console.log("num2 = ", this.format(nextProps.val));
    this.setState({number: this.format(nextProps.val)});
  }

  format = (str) => {
    let rezStr = '';

    if(str !== undefined){
      str.split("").map( (el, index) => {
        ((index+1)%4 === 0) ? rezStr += el+" " : rezStr += el;
      });
    }

    return rezStr;
  }

  normilize = (str) => {
    return str.split(" ").join("");     
  }

  handleChange = (event) => {
    const {onChange} = this.props;
    onChange( this.normilize( event.target.value ) );
  }  
  
  render() {
    console.log('state = ',this.state.number);
    return (
      <input onChange={this.handleChange} value={this.state.number}/>
    );
  }
}

export default CardNumberInput;
