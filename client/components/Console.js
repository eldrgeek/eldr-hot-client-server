import React from "react"
import ReactDOM from "react-dom"
import styles from './App.css';
import StyledButton from './StyledButton'
let BlueButton = StyledButton("blue")
const doFetch = (url,setState) => fetch(location.origin + url)
    .then(function(response) {
    return(response.json());
  })
  .then((state) => 
    setState({contents:state})
  )
class ConsoleLine extends React.Component {
  constructor(props) {
    super(props);
     }
   render() {
      if(Array.isArray(this.props.line) ){
        return ( 
         <li key={this.props.index}><ul>
            
          {this.props.line.map((line,ix) => <ConsoleLine level={this.props.level+1} index={this.props.index + "." + ix} line={line}></ConsoleLine>)}
           </ul></li>
               )
        
      } else {
        return (<li key={this.props.index}> 
          {this.props.level} {this.props.line}
    </li>)
      }
    
    
  }
}

class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contents: []};
    if(typeof window !== 'undefined') setInterval(this.fetch.bind(this), 2000)
  }
 
  fetch() {
    doFetch('/console/list',this.setState.bind(this))
  }
  clear() {
  
    doFetch('/console/clear', this.setState.bind(this))
    
  }
  render(){
          console.log(this.state.contents)
    return <div> 
      <BlueButton
          onClick={() => this.clear()}  >
        Clear It
        </BlueButton>
      <ul>
   
    {this.state.contents.map((line,index) => <ConsoleLine level = {1} index={index} line={line}></ConsoleLine>)}
    </ul>
    </div>
  }
}

export default Console;
