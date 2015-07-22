import React from 'react'
import {RouteHandler} from 'react-router'
import path from 'path'

import NavigationBar from './NavigationBar'

export default class AppView extends React.Component {
  constructor(...args) {
    super(...args);
    this.appStore = this.props.context.appStore;
    this.state = {
      config: this.appStore.getConfig()
    };
  }

  _onChange() {
    this.setState({
      config: this.appStore.getConfig()
    });
  }

  componentDidMount() {
    this.appStore.onChange(this._onChange.bind(this));
  }

  componentWillUnmount() {
    this.appStore.removeAllChangeListeners();
  }

  render() {
    return (
      <div>
        <NavigationBar title={this.state.config.title} description={this.state.config.baseurl} />
        <RouteHandler />
      </div>
    )
  }
}
