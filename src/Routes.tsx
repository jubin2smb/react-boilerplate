import React from "react";
import { Route } from "react-router-dom";
import Header from './components/HeaderComponent';
import Sidebar from './components/SidebarComponent';
import Dashboardcontainer from './components/Dashboard/Dashboardcontainer';
import LoginContainer from './components/Authentication/LoginContainer';
import SignupContainer from './components/Authentication/SignupContainer';

const DEFAULTROUTES = [
  { path: "/feeds", key: "FEEDS", exact: true, component: Dashboardcontainer },
  { path: "/page", key: "PAGE", exact: true, component: () => <h1>App Page</h1> },
];

export function AuthRoutes() {
  return (
    <div>
      <Route path="/authentication/login" component={LoginContainer} />
      <Route path="/authentication/signup" component={SignupContainer} />
    </div>

  )
}
export function DeafultRoutes() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      {
        DEFAULTROUTES.map((route) => {
          return <Route key={route.key} path={route.path} exact={route.exact} component={route.component} />;
        })
      }
    </div>
  )
}