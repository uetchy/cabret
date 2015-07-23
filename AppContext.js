import { Context } from 'material-flux'
import AppAction from './actions/AppAction'
import AppStore from './stores/AppStore'
import FileStore from './stores/FileStore'

export default class AppContext extends Context {
  constructor() {
    super();
    this.appAction = new AppAction(this);
    this.appStore = new AppStore(this);
    this.fileStore = new FileStore(this);
  }
}
