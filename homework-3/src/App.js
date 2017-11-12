import React, {Component} from 'react';
import './App.css';
import Step from './Step';
import PersonalForm from './PersonalForm';
import CardForm from './CardForm';

const stepTitles = ['Personal information', 'Card information', 'Finish'];

class App extends Component {

  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    isTimeOver: false
  };

  handleTabClick = ( number ) => {
    this.setState({step: number});
  }
  handleChangeForm = (arg1, arg2) => {
    const obj = {};
    obj[arg1] = arg2;
    this.setState( obj );
  }
  handleClickNextForm = () => {
    const currentStep = this.state.step;
    if( currentStep < 3 ){
      this.setState({step: currentStep + 1});
    }
  }
  handleChangeTimeOver = ( arg ) => {
    this.setState({isTimeOver: arg});
  }
  isFormCommitable = () => {
    const {step, firstName, lastName, email,cardNumber} = this.state;

    if( step === 1 ){
      if( firstName !== '' && lastName !== '' && email !== '' && email.includes('@') ){
        return true;
      }
    }else if(step === 2 && cardNumber.length === 16 ){
      return true;
    }
    return false;
  }
  renderForm = () => {
    const {step, firstName, lastName, email, cardNumber } = this.state;

    if(step === 1){
      return <PersonalForm firstName={firstName} lastName={lastName} email={email} onChangeForm={this.handleChangeForm} />;
    }else if(step === 2){
      return <CardForm cardNumber={cardNumber} onChangeForm={this.handleChangeForm} onChangeTimeOver={this.handleChangeTimeOver} />;
    }else if(step === 3){
      return 'Поздравляем!';
    }
  }
  getSteps = () => {
    let steps = [];
    const {step} = this.state;

    if(step === 1){
      steps = [
        <Step  key="Personal information" onClick={this.handleTabClick} isSelected={true} number={1} isClickable={false}>Personal information</Step>,
        <Step  key="Card information" onClick={this.handleTabClick} isSelected={false} number={2} isClickable={false} >Card information</Step>,
        <Step  key="Finish" onClick={this.handleTabClick} isSelected={false} number={3} isClickable={false} >Finish</Step>,
      ];

    }else if(step === 2){
      steps = [
        <Step  key="Personal information" onClick={this.handleTabClick} isSelected={false} number={1} isClickable={true}>Personal information</Step>,
        <Step  key="Card information" onClick={this.handleTabClick} isSelected={true} number={2} isClickable={false} >Card information</Step>,
        <Step  key="Finish" onClick={this.handleTabClick} isSelected={false} number={3} isClickable={false} >Finish</Step>,
      ];

    }else if(step === 3){
      steps = [
        <Step  key="Personal information" onClick={this.handleTabClick} isSelected={false} number={1} isClickable={true}>Personal information</Step>,
        <Step  key="Card information" onClick={this.handleTabClick} isSelected={false} number={2} isClickable={true} >Card information</Step>,
        <Step  key="Finish" onClick={this.handleTabClick} isSelected={true} number={3} isClickable={false} >Finish</Step>,
      ];

    }

    return steps;
  }

  render() {
    const isTimeOver = false;
    const isDisabled =  !this.isFormCommitable() || isTimeOver;
    const formContent = this.renderForm();
    const steps = this.getSteps();
    
    return (<div className="container">
              <div className="tab-panel">
                { steps }
              </div>
              <div className="form-content">
                { formContent }
              </div>
              <div className="button-panel">
                <button className="button-next" disabled = {isDisabled}  onClick = {this.handleClickNextForm}>Next</button>
              </div>
            </div>
          );
  }
}

export default App;
