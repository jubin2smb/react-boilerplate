import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from './ConfigureStore';
import {DeafultRoutes,AuthRoutes} from './Routes';



const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
         <Router>
            <Switch>
            <Route path ="/(authentication)" component= {AuthRoutes}/>
            <DeafultRoutes/>
            </Switch>
        </Router>
    </Provider>  ,
    document.getElementById('root'));

serviceWorker.unregister();
