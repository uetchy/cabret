import React from 'react'

import NavigationBar from './NavigationBar'
import Files from './Files'

var App = React.createClass({
  getInitialState() {
    this.appStore = this.props.context.appStore;
    return {
      config: this.appStore.getConfig()
    };
  },

  _onChange() {
    this.setState({
      config: this.appStore.getConfig()
    });
  },

  componentDidMount() {
    this.appStore.onChange(this._onChange);
  },

  componentWillUnmount() {
    this.appStore.removeAllChangeListeners();
  },

  render() {
    let { context } = this.props;
    return (
      <div>
        <NavigationBar title={this.state.config.title} description={this.state.config.baseurl} />
        <Files context={context} />
      </div>
    )
  }
});

module.exports = App;
