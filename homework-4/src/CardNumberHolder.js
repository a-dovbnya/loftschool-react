import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  static displayName = "Card number formating";

  state = {
    cardNumber: ""
  }

  handleChange = (number) => {
    this.setState({cardNumber: number});
  }

  render() {
    return (
      <CardNumberInput onChange={this.handleChange} cardNumber={this.state.cardNumber}/>
    );
  }
}

export default CardNumberHolder;
