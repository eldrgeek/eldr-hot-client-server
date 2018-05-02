import React from "react"
import ReactDOM from "react-dom"
import styles from './App.css';

class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contents: []};
    setInterval(this.fetch.bind(this), 2000)
  }
  fetch() {
    let _this = this;
    if(typeof window === 'undefined') return;
    console.log("fetch")
    const wait = ms => new Promise(resolve =>       setTimeout(resolve, ms));

    wait(2000).then(() => console.log("waited"))
    fetch(location.origin + '/console/list')
    .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    _this.setState({contents: myJson})
  });
  }
  clear() {
    let _this = this;
    console.log("cleared")
    fetch(location.origin + '/console/clear')
    .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    _this.setState({contents: myJson})
  });
  }
  render(){
    let contents = this.state.contents;
    console.log("render contents", contents)
    return <div> 
      <button
          className={styles.increment}
          onClick={() => this.clear()}
        >
  Clear
        </button>
      
      my stuff {contents}</div>
  }
}

export default Console;
