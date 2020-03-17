import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './ConfigureStore';
import ROUTES,{RenderRoutes,AuthRoutes} from './Routes';



const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
         <Router>
             <AuthRoutes/>
        <RenderRoutes routes={ROUTES} />
        </Router>
    </Provider>  ,
    document.getElementById('root'));

serviceWorker.unregister();
