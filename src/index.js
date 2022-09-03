import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store'
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import './assets/styles/default.scss';
import {CustomProvider} from 'rsuite';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <CustomProvider theme="dark">
                    <App/>
                </CustomProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);



