"use strict"

import React, { PropTypes } from "react"
import Search from "components/search"
import UserInfo from "components/user-info"
import Actions from "components/actions"
import Repos from "components/repos"

const AppContent = ({
  userinfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarRed
}) => (
  <div className="app">
    <Search handleSearch={handleSearch} />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarRed={getStarRed} />}

    {!!repos.length && (
      <Repos className="repos" title="Repositórios:" repos={repos} />
    )}

    {!!starred.length && (
      <Repos className="starred" title="Favoritos:" repos={starred} />
    )}
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
