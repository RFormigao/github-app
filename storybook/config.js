import { configure } from '@storybook/react'

import '../src/css/style.css'

const req = require.context('../src/components', true, /\.story\.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
