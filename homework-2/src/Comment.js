import React, {Component} from 'react';

class Comment extends Component {

  handleDelete = event => {
    const {id, onDelete} = this.props;
    onDelete(id);
  }
  render() {
    const {text} = this.props;
    return (
      <p>{text} <span onClick = {this.handleDelete} className = "delete" alt="Удалить комментарий">&#10008;</span></p>
    )
  }
}

export default Comment;
