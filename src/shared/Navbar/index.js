import React from 'react'
import ReactDOM from 'react-dom'
import singleSPAReact from 'single-spa-react'
import NavbarComponent from './root'

function domElementGetter() {
  return document.getElementById('Navbar')
}

export const Navbar = singleSPAReact({
  React,
  ReactDOM,
  rootComponent: NavbarComponent,
  domElementGetter,
})
