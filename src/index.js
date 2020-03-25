import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configStore from './store/configStore'
import App from './containers/index.js'
import { ConfigProvider } from 'antd';


window.React = React

const store = configStore()

ReactDOM.render(
    <ConfigProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </ConfigProvider>,
    document.getElementById('root')
)
