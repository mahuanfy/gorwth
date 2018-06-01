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


import Login from './components/login/Login'
import ShowDiary from './components/diary/ShowDiary'

const store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
ReactDOM.render(
    <Provider store={store}>
        <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route  path="/app" component={App} />
                    {/* <Route path="/show" component={ShowDiary} /> */}
                    <Redirect to="/" />
                    {/* <Route path="/:location" component={test} /> */}
                </Switch>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();