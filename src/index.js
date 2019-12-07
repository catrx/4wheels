import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

const Store = createStore(reducers, {}, applyMiddleware(reduxThunk))

const Routing = (
    <Provider store={Store}>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </div>
        </Router>
    </Provider>
)

ReactDOM.render(Routing, document.getElementById('root'));

serviceWorker.unregister();
