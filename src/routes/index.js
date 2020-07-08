
import React from 'react';
import { renderRoutes } from "react-router-config";//路由
import { Redirect } from "react-router-dom";

import HomeComponent from "../pages/home/index"
import NoteComponent from "../pages/note/index"

import ContextApi from "../demopages/contextApi/index"
import CounterRedux from "../demopages/counterRedux/index"

const Root = ({ route }) => (
  <div>
    {/* <h1>Root</h1> */}
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
)
export default  [
 
      {
        path: "/",
        component: Root,
        routes: [
          {
            path: "/",
            exact: true,
            render: () => <Redirect to={"/index"} />
          },
          {
            path: "/index",
            component: HomeComponent,
          },
          {
            path: "/note",
            component: NoteComponent,
          },


          // demopages
          {
            path: "/demopages/contextApi",
            component: ContextApi,
          },
          {
            path: "/demopages/CounterRedux",
            component: CounterRedux,
          },
          
        ]
      }
      // demopages
     
    ]