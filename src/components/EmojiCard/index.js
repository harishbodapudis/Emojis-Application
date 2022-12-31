// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojisList, changeScoreAndEmojiList} = props
  const {id, emojiName, emojiUrl} = emojisList

  const addIdToList = () => {
    changeScoreAndEmojiList(id)
  }

  return (
    <div>
      <li className="emoji-box">
        <button type="button" className="emoji-btn" onClick={addIdToList}>
          <img src={emojiUrl} alt={emojiName} className="emoji-img" />
        </button>
      </li>
    </div>
  )
}

export default EmojiCard
