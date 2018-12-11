import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'

// Redux Store
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { loadBlog } from './store/blog'

const store = configureStore()
store.dispatch(loadBlog())


ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
), document.getElementById('root'));