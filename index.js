import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import WebFont from 'webfontloader'

require('./fonts.css')

import * as reducers from './reducers'
import * as actions from './actions'

import { root, left } from './styles.scss'

import LeftLogo from './LeftLogo'
import RightScroll from './RightScroll'

const store = createStore(
  combineReducers({ ...reducers })
)

window.store = store

WebFont.load({
  typekit: {
    id: 'jbt1fns'
  },
  custom: {
    families: ['montserrat', 'raleway']
  },
  fontactive: function(familyName, fvd) {
    console.log('loaded ' + familyName)
    store.dispatch(actions.loadFont(familyName))
  }
})

render(
  <Provider store={store}>
    <div className={root}>
      <div className={left}>
        <LeftLogo />
      </div>
      <RightScroll />
    </div>
  </Provider>,
  document.getElementById('root')
)
