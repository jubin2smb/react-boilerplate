import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Dashboardcontainer from './components/Dashboard/Dashboardcontainer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './ConfigureStore'



const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Header/>
            <div className="container-fluid">
            <Route exact path="/" component={App} />
            <Route path="/dashboard" component={Dashboardcontainer} />
            </div>
            <Footer/>
        </Router>
    </Provider>  ,
    document.getElementById('root'));

serviceWorker.unregister();
