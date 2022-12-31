// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {playStatus, result, score, playAgainToWin} = props
  const changeTopScore = () => {
    playAgainToWin()
  }
  const url =
    result === 'Won'
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const best = result === 'Won' ? 'Best ' : ''
  return (
    <div className="result-container">
      <div className="result-data-box">
        <h1 className="result-status">You {result}</h1>
        <div className="result-score-box">
          <p className="win-lose-text">{best}Score</p>
          <p className="score-text">{score}/12</p>
        </div>
        <button
          type="button"
          className="play-again-btn"
          onClick={changeTopScore}
        >
          Play Again
        </button>
      </div>
      <div>
        <img src={url} alt="win or lose" className="emojis-group-img" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
