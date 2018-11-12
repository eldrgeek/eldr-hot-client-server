import React from 'react';
import { connect } from 'react-redux';
import CountButton from './CountButton'
import PropTypes from 'prop-types';
import CreateClass from 'create-react-class';
import Console from './Console'
const App = connect(state => ({count: state}))(CreateClass({
  propTypes: {
    count: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  render() {
    const { count, dispatch } = this.props;
    return (
      <div>
        <h1>Demonseeeeetr</h1>
        <CountButton />
        <Console />
        <p>
          <a href="/whoami">Server-only route</a>
        </p>
      </div>
    );
  },
}));

export default App;
