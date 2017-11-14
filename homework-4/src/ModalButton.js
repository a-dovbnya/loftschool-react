import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './ModalButton.css';

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(this.props.children, this.props.domNode);
  }
 } 

class ModalButton extends Component {
  static displayName = "t";

  state = {
    isModalShow: false
  }

  showModal = () => {
    this.setState({isModalShow: true});
  }
  hideModal = () => {
    this.setState({isModalShow: false});
  }

  render() {
    return (
      <div>
        <button onClick = {this.showModal}>Show modal!</button>
        { (this.state.isModalShow) ? 

        <Modal domNode={document.getElementById("portal")}>
          <div className="modal">
            <div className="modal__fog">
              <div className="modal__body">
                <h1>Модальное окно!</h1>
                <button onClick = {this.hideModal}>Закрыть</button>
                </div>
              </div>
            </div>
        </Modal>

         : null}
      </div>
    );
  }
}

export default ModalButton;
