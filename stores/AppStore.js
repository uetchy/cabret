import { Store } from 'material-flux'

export default class AppStore extends Store {
  constructor(...args) {
    super(...args);
    this.state = {
      config: null
    };
    this.register('loadConfig', this.onHandler);
  }

  // data is come from Action
  onHandler(data) {
    this.setState({
      config: data
    });
  }

  // just getter method
  getConfig() {
    return this.state.config;
  }
}
