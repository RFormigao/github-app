'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import UserInfo from './index'

const stories = storiesOf('User Info', module)

const userinfo = {
  photo: 'https://avatars0.githubusercontent.com/u/25489426?v=4',
  login: 'RFormigao',
  username: 'Robson Formigão',
  repos: 10,
  followers: 100,
  following: 100
}

stories.add('with userinfo props', () => (
  <div className='app'>
    <UserInfo userinfo={userinfo} />
  </div>
))
