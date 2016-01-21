import React from 'react';
import ReactDOM from 'react-dom';

import Context from './AppContext';
import App from './components/App';

let context = new Context();

context.appAction.loadConfig();
context.appAction.loadFiles();
ReactDOM.render(
  React.createElement(App, {context}), document.querySelector("app")
)
