import React from 'react'
import Router from 'react-router'
import NavigationBar from './components/navigation_bar'
import ContentsPage from './components/contents'
import SettingsPage from './components/settings'

import {Route} from 'react-router'
import {NotFoundRoute} from 'react-router'
import {DefaultRoute} from 'react-router'
import {RouteHandler} from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <RouteHandler />
      </div>
    )
  }
}

class NotFound extends React.Component {
  render() {
    return <h2>Not found</h2>
  }
}

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={ContentsPage} />
    <Route name="contents" handler={ContentsPage}/>
    <Route name="settings" handler={SettingsPage}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.querySelector("app"))
})
