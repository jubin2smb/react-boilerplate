import React from "react";
 import App from './App';
import { Route, Switch } from "react-router-dom";
 import Header from './components/HeaderComponent';
 import Sidebar from './components/SidebarComponent';
 import Dashboardcontainer from './components/Dashboard/Dashboardcontainer';
 import LoginContainer from './components/Authentication/LoginContainer';
 import SignupContainer from './components/Authentication/SignupContainer';
const ROUTES = [
  { path: "/feeds", key: "ROOT", exact: true, component:Dashboardcontainer},
  { path: "/page", key: "ROOT", exact: true, component: () => <h1>App Page</h1>},
 
];

export default ROUTES;
export function AuthRoutes(){
  return(
    <Switch>
    <Route exact path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
  </Switch>
  )
}
function RouteWithSubRoutes(route) {
    return (
     <Route
     path={route.path}
     exact={route.exact}
     render={props =><route.component {...props} routes={route.routes} />}
   />
    );
  }
  export function RenderRoutes({routes}) {
    return (
      <div>
        <Header/>
        <Sidebar/>
      <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
    </div>
    );
  }