import { Store } from 'material-flux'

export default class FileStore extends Store {
  constructor(...args) {
    super(...args);
    this.state = {
      files: null
    };
    this.register('loadFiles', this.onHandler);
  }

  // data is come from Action
  onHandler(data) {
    this.setState({
      files: data
    });
  }

  // just getter method
  getFiles() {
    return this.state.files;
  }
}
