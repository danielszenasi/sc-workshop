

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/danielszenasi/Projects/sc-workshop/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('../src/sites/404.js'), universalOptions)
      t_0.template = '../src/sites/404.js'
      
const t_1 = universal(import('../src/sites/about.js'), universalOptions)
      t_1.template = '../src/sites/about.js'
      
const t_2 = universal(import('../src/sites/blog.js'), universalOptions)
      t_2.template = '../src/sites/blog.js'
      
const t_3 = universal(import('../src/sites/index.js'), universalOptions)
      t_3.template = '../src/sites/index.js'
      
const t_4 = universal(import('../src/sites/listings'), universalOptions)
      t_4.template = '../src/sites/listings'
      
const t_5 = universal(import('../src/containers/Post'), universalOptions)
      t_5.template = '../src/containers/Post'
      
const t_6 = universal(import('../src/containers/Listing'), universalOptions)
      t_6.template = '../src/containers/Listing'
      

// Template Map
export default {
  '../src/sites/404.js': t_0,
'../src/sites/about.js': t_1,
'../src/sites/blog.js': t_2,
'../src/sites/index.js': t_3,
'../src/sites/listings': t_4,
'../src/containers/Post': t_5,
'../src/containers/Listing': t_6
}
// Not Found Template
export const notFoundTemplate = "../src/sites/404.js"

