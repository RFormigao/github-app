'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'

import Repos from './index'

const stories = storiesOf('Repos', module)
const repos = [
  {
    link: 'https://github.com/RFormigao',
    name: 'RFormigao'
  }
]

stories.add('with title prop', () => (
  <div className='app'>
    <Repos title='Repositórios' className='repos' />
  </div>
))
stories.add('with repos', () => (
  <div className='app'>
    <Repos title='Repositórios' repos={repos} className='repos' />
  </div>
))
