'use strict'

import React from 'react'
import { storiesOf, action } from '@storybook/react'

import Search from './index'

const stories = storiesOf('Search', module)

stories.add('with handleSearch', () => (
  <div className='app'>
    <Search handleSearch={action('Key press')} />
  </div>
))
