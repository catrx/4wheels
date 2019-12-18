import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import App from "./App";

const Store = createStore(reducers, {}, applyMiddleware(reduxThunk))

const Application = (
    <Provider store={Store}>
        <App/>
    </Provider>
)

ReactDOM.render(Application, document.getElementById('root'));

serviceWorker.unregister();
