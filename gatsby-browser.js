import React from 'react'
import 'prismjs/themes/prism.css'
// locals
import DarkModeProvider from './src/hooks/DarkModeContext'
import './src/styles/index.scss'

export function wrapRootElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DarkModeProvider {...props}>{element}</DarkModeProvider>
}
