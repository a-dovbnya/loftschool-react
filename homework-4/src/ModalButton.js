import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './ModalButton.css';

class Modal extends Component {
 
  render() {
    console.log(this);
    const {childrens} = this.props;
    return ReactDOM.createPortal(childrens, this.props.domNode);
  }
 } 

class ModalButton extends Component {
  static displayName = "ModalButton";

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
    /*const Modal = null;
    if(this.state.isModalShow){
      Modal = <Modal domNode={document.getElementById("portal")} />;
    }*/
    return (
    
      <div>
        <button onClick = {this.showModal}>Show modal!</button>
        { (this.state.isModalShow) ? 

        <Modal domNode={document.getElementById("modal")}>
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
