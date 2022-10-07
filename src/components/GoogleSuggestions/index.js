import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  typing = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const suggestResults = suggestionsList.filter(suggestion =>
      suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="google-engine-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-results-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-logo"
                alt="search-icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-input"
                value={searchInput}
              />
            </div>
            <ul className="suggestion-container">
              {suggestResults.map(suggest => (
                <SuggestionItem
                  key={suggest.id}
                  suggestion={suggest.suggestion}
                  addSearchInput={this.typing}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
