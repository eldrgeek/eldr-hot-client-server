import React from 'react';
import styles from './App.css';
import { connect } from 'react-redux';
import CountButton from './CountButton'
const App = connect(state => ({count: state}))(React.createClass({
  propTypes: {
    count: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  render() {
    const { count, dispatch } = this.props;
    return (
      <div>
        <h1>Demonstrations</h1>
        <CountButton />
        
        <p>
          <a href="/whoami">Server-only route</a>
        </p>
      </div>
    );
  },
}));

export default App;
