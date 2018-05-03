import React from 'react';
import { connect } from 'react-redux';
import CountButton from './CountButton'
import Console from './Console'
const App = connect(state => ({count: state}))(React.createClass({
  propTypes: {
    count: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  render() {
    const { count, dispatch } = this.props;
    return (
      <div>
        <h1>Demonstrator5555</h1>
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
