import React from "react"
import ReactDOM from 'react-dom'
import singleSPAReact from 'single-spa-react'
import CreateNote from './root.component.js'

function domElementGetter() {
  return document.getElementById('CreateNote')
}

const reactLifecycles = singleSPAReact({
  React,
  ReactDOM,
  rootComponent: CreateNote,
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
