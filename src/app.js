'use strict'

import React, { PureComponent } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from 'components/app-content'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      ajax()
        .get(`https://api.github.com/users/${value}`)
        .then(result => {
          this.setState({
            userinfo: {
              username: result.name,
              login: result.login,
              photo: result.avatar_url,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            }
          })
        })
    }
  }

  getRepos (e) {
    ajax()
      .get(`https://api.github.com/users/${this.state.userinfo.login}/repos`)
      .then(result => {
        this.setState({
          repos: result.map(repo => ({
            name: repo.name,
            link: repo.url
          })),
          starred: []
        })
      })
  }

  getStarRed (e) {
    ajax()
      .get(`https://api.github.com/users/${this.state.userinfo.login}/starred`)
      .then(result => {
        this.setState({
          starred: result.map(repo => ({
            name: repo.name,
            link: repo.url
          })),
          repos: []
        })
      })
  }

  render () {
    return (
      <AppContent
        {...this.state}
        handleSearch={e => this.handleSearch(e)}
        getRepos={e => this.getRepos(e)}
        getStarRed={e => this.getStarRed(e)}
      />
    )
  }
}

export default App
