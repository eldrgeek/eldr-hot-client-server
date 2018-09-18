import React from 'react';
import styles from './App.css';
import { connect } from 'react-redux';
import styled from 'styled-components'
import StyledButton from './StyledButton'
import PropTypes from 'prop-types';
import CreateClass from 'create-react-class';
let RedButton = StyledButton

const CountButton = connect(state => ({count: state}))(CreateClass({
  propTypes: {
    count: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
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