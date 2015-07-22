import { Action } from 'material-flux'
import fs from 'fs'
import toml from 'toml'
import path from 'path'
import gm from 'gray-matter'

export default class AppAction extends Action {
  loadConfig() {
    let data = fs.readFileSync( 'config.toml', 'utf8' );
    let config = toml.parse(data);
    this.dispatch('loadConfig', config);
  }

  loadFiles() {
    var basedir = path.join(process.cwd(), 'content', 'post');
    var files = fs.readdirSync( basedir )
      .filter( function(file) {
        return path.extname(file) == ".md"
      })
      .map(function(file){
        let matter = gm.read(path.join(basedir, file), {delims: '+++', lang: 'toml'}).data;
        matter['path'] = path.join(basedir, file);
        return matter;
      });
    this.dispatch('loadFiles', files);
  }
}
