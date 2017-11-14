import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  static displayName = "Card number formating";

  state = {
    cardNumber: "12345"
  }

  handleChange = (number) => {
    console.log("Holder set state",number);
    this.setState({cardNumber: number});
  }

  render() {
    console.log("Holder render");
    return (
      <CardNumberInput onChange={this.handleChange} val={this.state.cardNumber}/>
    );
  }
}

export default CardNumberHolder;
