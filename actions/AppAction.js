import { Action } from 'material-flux'
import { cwd } from 'child_process'
import fs from 'fs'
import toml from 'toml'
import path from 'path'

export default class AppAction extends Action {
  loadConfig() {
    let data = fs.readFileSync( 'config.toml', 'utf8' );
    let config = toml.parse(data);
    this.dispatch('loadConfig', config);
  }

  loadFiles() {
    var files = fs.readdirSync( path.join(cwd(), 'content', 'post') ).map( function(file) {
      if (path.extname(file) != ".md") return null;
      return file;
    });
    this.dispatch('loadFiles', files);
  }
}
