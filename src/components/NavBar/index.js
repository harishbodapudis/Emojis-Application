// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, topScore, playStatus} = props

  return (
    <div className="nav-container">
      <div className="game-label-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="nav-img"
        />
        <h1 className="game-heading">Emoji Game</h1>
      </div>
      {playStatus ? (
        <div className="score-card">
          <p className="score-data">Score: {score}</p>
          <p className="score-data">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default NavBar
