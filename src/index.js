import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import Theme from './themes/Theme';
import { ThemeProvider } from '@emotion/react'


ReactDom.render(
    <ThemeProvider theme={Theme}>
        <App />
    </ThemeProvider>
    ,document.querySelector('#root')
);