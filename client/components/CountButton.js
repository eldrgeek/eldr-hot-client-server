import React from 'react';
import styles from './App.css';
import { connect } from 'react-redux';
import styled from 'styled-components'
import StyledButton from './StyledButton'
let RedButton = StyledButton


const CountButton = connect(state => ({count: state}))(React.createClass({
  propTypes: {
    count: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  render() {
    const { count, dispatch } = this.props;
    return (
    <div>

        <RedButton primary={true}
          
          onClick={() => dispatch({type: "INC"})}
        >
  {count.num}
        </RedButton>
  </div>
  )
  }
}));

export default CountButton;