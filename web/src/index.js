import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import { Route, Switch, BrowserRouter as Router, BrowserHistory, Redirect } from 'react-router-dom';
import App from './components/App';
import reducers from './reducers/reducers';
import './css/index.css';

import Diary from './components/diary/Diary'
import Login from './components/login/Login'
import ShowDiary from './components/diary/ShowDiary'

const store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Diary} />
                    <Route path="/login" component={Login} />
                    {/* <Route path="/show" component={ShowDiary} /> */}
                    <Redirect to="/login" />
                    {/* <Route path="/:location" component={test} /> */}
                </Switch>
            </App>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();