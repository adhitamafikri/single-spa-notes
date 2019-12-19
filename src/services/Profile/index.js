import React from "react"
import ReactDOM from 'react-dom'
import singleSPAReact from 'single-spa-react'
import Profile from './root.component'

function domElementGetter() {
  return document.getElementById('Profile')
}

const reactLifecycles = singleSPAReact({
  React,
  ReactDOM,
  rootComponent: Profile,
  domElementGetter
})

export const bootstrap = [
  reactLifecycles.bootstrap,
]

export const mount = [
  reactLifecycles.mount,
]

export const unmount = [
  reactLifecycles.unmount,
]
