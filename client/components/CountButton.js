import React from 'react';
import styles from './App.css';
import { connect } from 'react-redux';

const CountButton = connect(state => ({count: state}))(React.createClass({
  propTypes: {
    count: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  render() {
    const { count, dispatch } = this.props;
    return (
    <div>

        <button
          className={styles.increment}
          onClick={() => dispatch({type: "INC"})}
        >
  {count.num}
        </button>
  </div>
  )
  }
}));

export default CountButton;