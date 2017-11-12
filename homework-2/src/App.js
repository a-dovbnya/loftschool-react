import React, { Component } from "react";
import NewsPost from "./NewsPost";

class App extends Component {

  state = {
    newsInput: '',
    news: []
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({newsInput: value});
  }
  handleKeyDown = event => {
    if( event.keyCode === 13 ){
      const { news, newsInput } = this.state;
      const currentNews = { text: newsInput }
      this.setState({ newsInput: '', news: [...news, currentNews] });
    }
  }
  render() {
    const {newsInput, news} = this.state;

    return (
      <div className="App">
        <input type="text"
          placeholder="Какие новости?"
          className = "App__area" 
          value = {newsInput}
          onChange = {this.handleChange}
          onKeyDown = {this.handleKeyDown}
        />
        <div>
          {news.map( news => (<NewsPost 
                                key={news.text} 
                                text={news.text}
                              />
                            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
