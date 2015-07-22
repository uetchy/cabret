import React from 'react'

import Context from './AppContext';
import AppView from './components/AppView'

let context = new Context();

React.render(
  React.createElement(AppView, {context}), document.querySelector("app")
)
