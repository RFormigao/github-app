'use strict'

import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Actions from './index'

const stories = storiesOf('Actions', module)

stories.add('Actions components', () => (
  <div className='app'>
    <Actions getRepos={action('Get Repos')} getStarRed={action('Get Starred')} />
  </div>
))
