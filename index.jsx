import React from 'react'

// Flux
import AppContext from './AppContext';

// React Components
import AppView from './components/AppView'
import FilesView from './components/FilesView'
import SettingsView from './components/SettingsView'

// Routers
import Router from 'react-router'
import {Route} from 'react-router'
import {NotFoundRoute} from 'react-router'
import {DefaultRoute} from 'react-router'

class NotFound extends React.Component {
  render() {
    return <h2>Not found</h2>
  }
}

let context = new AppContext();

let routes = (
  <Route handler={AppView} path="/">
    <DefaultRoute handler={FilesView} />
    <Route name="files" handler={FilesView}/>
    <Route name="settings" handler={SettingsView}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(
    React.createElement(Handler, {context})
  , document.querySelector("app"))
})
