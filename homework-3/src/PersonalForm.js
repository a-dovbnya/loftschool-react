import React, {Component} from 'react';
import Title from './Title';
import './PersonalForm.css';

export class PersonalForm extends Component {
  handleChangeForm = event => {
    const {name, value} = event.target;
    const {onChangeForm} = this.props;
    onChangeForm(name, value);
  }
  render() {
    const {firstName, lastName, email} = this.props;
    return (
      <div>
        <Title>Персональная информация</Title>
        <div className = "personal-form">
          <input type="text" value = {firstName} name="firstName" placeholder="First Name" onChange = {this.handleChangeForm}/>
          <input type="text" value = {lastName} name="lastName" placeholder="Last Name" onChange = {this.handleChangeForm}/>
          <input type="text" value = {email} name="email" placeholder="Email" onChange = {this.handleChangeForm}/>
        </div>
      </div>
    );
  }
}

export default PersonalForm;
