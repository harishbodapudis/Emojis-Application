/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, emojisIds: [], playStatus: true, result: ''}

  changeScoreAndEmojiList = id => {
    const {emojisIds} = this.state
    const {emojisList} = this.props

    if (!emojisIds.includes(id)) {
      this.setState(prevState => ({emojisIds: [...prevState.emojisIds, id]}))
      this.setState(prevState => ({score: prevState.score + 1}))
      if (emojisIds.length === emojisList.length - 1) {
        this.setState({result: 'Won', playStatus: false, topScore: 12})
      }
    } else {
      this.setState({result: 'Lose', playStatus: false})
    }
  }

  sortList = emojisList => {
    let i = 0
    const emojisArray = emojisList
    while (i < emojisArray.length) {
      const temp = emojisArray[i]
      const value = Math.floor(Math.random() * emojisArray.length)
      emojisArray[i] = emojisArray[value]
      emojisArray[value] = temp
      i += 1
    }
    return emojisArray
  }

  playAgainToWin = () => {
    const {score, topScore} = this.state
    const {emojisList} = this.props
    console.log(score, topScore)
    if (score > topScore) {
      this.setState({
        topScore: score,
        score: 0,
        playStatus: true,
        emojisIds: [],
        result: '',
      })
    } else if (topScore === emojisList.length) {
      this.setState({
        score: 0,
        topScore: 0,
        playStatus: true,
        emojisIds: [],
        result: '',
      })
    } else {
      this.setState({score: 0, playStatus: true, emojisIds: [], result: ''})
    }
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, playStatus, result} = this.state

    const shuffleList = this.sortList(emojisList)
    const scoreBoard = playStatus ? 'display-mode' : ''
    const gameBoard = !playStatus ? 'display-mode' : ''

    return (
      <div className="main-container">
        <nav className="nav-bar">
          <NavBar score={score} topScore={topScore} playStatus={playStatus} />
        </nav>
        <div className="page-body">
          <ul className={`emoji-container ${gameBoard}`}>
            {shuffleList.map(eachItem => (
              <EmojiCard
                key={eachItem.id}
                emojisList={eachItem}
                changeScoreAndEmojiList={this.changeScoreAndEmojiList}
                playStatus={playStatus}
              />
            ))}
          </ul>
          <div className={scoreBoard}>
            <WinOrLoseCard
              playStatus={playStatus}
              result={result}
              score={score}
              playAgainToWin={this.playAgainToWin}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
