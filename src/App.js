import React from 'react';
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";//路由
import { renderRoutes } from "react-router-config";//路由
import routes from "./routes/index.js";//路由配置

import store from "./store/index";

import './App.css'
import './lib/mock'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   HashRouter
// } from "react-router-dom"

function App() {
  return (
    // <Provider store={store}>
      <HashRouter>
        {renderRoutes(routes)}
      </HashRouter>
    // </Provider>
  );
}

export default App;
