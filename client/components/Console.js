import React from "react"
import ReactDOM from "react-dom"
import styles from './App.css';
import StyledButton from './StyledButton'
let BlueButton = StyledButton("blue")
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
    console.log("RENDER CONSOLE")
    let contents = this.state.contents;
    console.log("render contents", contents)
    return <div> 
      <BlueButton
          onClick={() => this.clear()}
        >
        Clear It
        </BlueButton>
      
      my stuff {contents}</div>
  }
}

export default Console;
