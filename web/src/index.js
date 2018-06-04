import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {CookiesProvider} from 'react-cookie';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import {Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';
import App from './components/App';
import reducers from './reducers/reducers';
import Login from './components/login/Login'
import './css/index.css';

const store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/app" component={App}/>
                    {/* <Route path="/show" component={ShowDiary} /> */}
                    <Redirect to="/"/>
                    {/* <Route path="/:location" component={test} /> */}
                </Switch>
            </Router>
        </Provider>
    </CookiesProvider>, document.getElementById('root'));
registerServiceWorker();