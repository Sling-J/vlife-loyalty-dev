import React, { FC } from 'react'
import * as ReactDOM from 'react-dom'
import './settings/i18n'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { jss } from 'react-jss'
import vendorPrefixer from 'jss-plugin-vendor-prefixer'
import Modal from 'react-modal'
import { ThemeDecorator } from '@vlife-grand-era/vlife-storybook'
import { store } from '../store/configureStore'
import { AppContainer, ScrollToTop } from 'root'
import '@vlife-grand-era/vlife-storybook/build/public/static/fonts.css'
import 'assets/main.css'

jss.use(vendorPrefixer())
Modal.setAppElement('#root')

const Index: FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <ScrollToTop>
          <ThemeDecorator>
            <AppContainer />
          </ThemeDecorator>
        </ScrollToTop>
      </HashRouter>
    </Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
