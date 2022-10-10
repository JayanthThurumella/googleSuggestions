import './index.css'

const SuggestionItem = props => {
  const {suggestion, addSearchInput} = props

  const suggestLink = () => {
    addSearchInput(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="title">{suggestion}</p>
      <button type="button" onClick={suggestLink}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
