import React from 'react'

import Context from './AppContext';
import App from './components/App'

let context = new Context();

context.appAction.loadConfig();
context.appAction.loadFiles();
React.render(
  React.createElement(App, {context}), document.querySelector("app")
)
