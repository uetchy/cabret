import React from 'react'

import NavigationBar from './NavigationBar'
import Files from './FilesView'

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
    let { context } = this.props;
    return (
      <div>
        <NavigationBar title={this.state.config.title} description={this.state.config.baseurl} />
        <Files context={context} />
      </div>
    )
  }
}
