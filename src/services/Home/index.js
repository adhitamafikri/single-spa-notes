import React from "react"
import ReactDOM from 'react-dom'
import singleSPAReact from 'single-spa-react'
import Home from './root.component.js'

function domElementGetter() {
  return document.getElementById('Home')
}

const reactLifecycles = singleSPAReact({
  React,
  ReactDOM,
  rootComponent: Home,
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
