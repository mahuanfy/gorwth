import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import { Route, Switch, BrowserRouter as Router, BrowserHistory } from 'react-router-dom';
import App from './components/App';
import reducer from './reducers/index';
import './css/index.css';

import Diary from './components/diary/Diary'
import AddDiary from './components/diary/AddDiary'
import ShowDiary from './components/diary/ShowDiary'

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Route exact path="/" component={Diary} />
                <Route path="/add" component={AddDiary} />
                <Route path="/show" component={ShowDiary} />
            </App>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
