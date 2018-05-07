import React from "react"
import ReactDOM from "react-dom"
import styles from './App.css';
import StyledButton from './StyledButton'
let BlueButton = StyledButton

import {connect} from 'react-redux'


class ConsoleLine extends React.Component {
  constructor(props) {
    super(props);
     }
   render() {
     let key = this.props.level + "." + this.props.index
     
      if(Array.isArray(this.props.line) ){
        return ( 
         <li key={key}><ul key={key + "UL"}>
            
          {this.props.line.map((line,ix) => <ConsoleLine level={this.props.level+1} key={key + "." + ix} line={line}>
          
          </ConsoleLine>)}
           </ul></li>
               )
        
      } if(typeof this.props.line === 'object') {
        return (<li key={key}> 
          "Object"
    </li>)
      }else {
        return (<li key={key}> 
          {this.props.level} {this.props.line}
    </li>)
      }
    
    
  }
}

class Console extends React.Component {
  constructor(props) {
    super(props);
    if(typeof window !== 'undefined') setInterval(this.fetch.bind(this), 2000)
    this.counter = 0
  }
  
  doFetch(url){
    this.counter = 0
    let setContents = this.props.setContents.bind(this)
    fetch(location.origin + url)
      .then(function(response) {
        return(response.json());
      })
    .then((contents) => {
      setContents(contents)
     })
    
  }
        
  fetch() {
    this.doFetch('/console/list')
  }
  clear() {
  
    this.doFetch('/console/clear')
    
  }
  render(){
    
    let contents = this.props.consoleContents
    // contents = [["this stuff here"]]
    return <div> 
 
      <BlueButton
          onClick={() => this.clear()}  >
        Clear It
        </BlueButton>
     

    {contents.map((line,index) => <ConsoleLine key={this.counter} level={this.counter++} index={index} line={line}></ConsoleLine>)}
    
    </div>
  }
}
     
const mapStateToProps = state => {
  return {
    consoleContents : state.consoleContents
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setContents : (contents) => dispatch({
      type : 'SET_CONTENTS',
      contents
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Console);
