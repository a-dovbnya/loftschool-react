import React, {PureComponent} from 'react';
import './Step.css';

class Step extends PureComponent {
  handleClick = event => {
    const {isClickable,  onClick, number} = this.props;

    if( isClickable ){
      onClick(number);
    }
  }

  render() {
    const { isSelected, isClickable, number, children } = this.props;
    let stepClass = "step";

    if( isSelected ){
      stepClass += " step-selected";
    }

    if( isClickable ){
      stepClass += " step-clickable";
    }

    return (
      <div className={stepClass}>
        <p className="step__number" onClick = {this.handleClick }>{number}</p>
        <p className="step__title">{children}</p>
      </div>
    );
  }
}

export default Step;
