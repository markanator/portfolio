import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import Layout from './src/components/Layout'

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return <ParallaxProvider>{element}</ParallaxProvider>
}
