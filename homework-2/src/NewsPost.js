import React, {Component} from 'react';
import Comment from "./Comment";

let id = 0;
function getId(){
  id += 1;
  return id;
}

class NewsPost extends Component {

  state = {
    commentInput: "",
    comments: []
  }

  handleChange = event => {
    const commentTxt = event.target.value;
    this.setState({commentInput: commentTxt});
  }
  
  handleKeyDown = event => {
    if( event.keyCode === 13 ){
      const { comments, commentInput } = this.state;
      const currentComment = {id: getId(), text: commentInput }
      this.setState({ commentInput: "", comments: [...comments, currentComment] });
    }
  }

  handleDelete = id => {
    this.setState(state => ({
      comments: state.comments.filter( (comment) => comment.id !== id)
    }));
  }

  render() {
    const {text} = this.props;
    const { commentInput, comments } = this.state;

    return (
      <div className="posts">
        <p>{text}</p>
        <div className = "comments">
          {comments.map( comment => (
              <Comment 
                key = {comment.id}
                id = {comment.id}
                text = {comment.text}
                onDelete = {this.handleDelete}
              />
          ))}
        </div>
        <input type="text" 
          placeholder = "Прокомментируем?"
          className = "posts__area"
          onChange = {this.handleChange}
          onKeyDown = {this.handleKeyDown}
          value = {commentInput}
        />

      </div>
    )
  }
}

export default NewsPost;
