import React from 'react';
import styles from './App.css';
import { connect } from 'react-redux';
import styled from 'styled-components'
const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 12rem;
  background: red;
  color: white;
  border: 2px solid black;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && styled.css`
    background: blue;
    color: palevioletred;
  `}
`

const CountButton = connect(state => ({count: state}))(React.createClass({
  propTypes: {
    count: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  render() {
    const { count, dispatch } = this.props;
    return (
    <div>

        <Button
          
          onClick={() => dispatch({type: "INC"})}
        >
  {count.num}
        </Button>
  </div>
  )
  }
}));

export default CountButton;