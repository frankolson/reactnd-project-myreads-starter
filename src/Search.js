import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { debounce } from 'throttle-debounce'

import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends React.Component {
  state = {
    results: [],
  }

  static propTypes = {
    shelfChange: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.callAjax = debounce(500, this.callAjax)
  }
  
  callAjax = (query) => {
    BooksAPI.search(query, 20).then((results) => {
      if (results.error) {
        this.setState({results: results.items})
      } else {
        this.setState({results})
      }
    })
  }

  search = (query) => {
    if (query !== "") {
      this.callAjax(query)
    } else {
      this.setState({results: []})
    }
  }

  render() {
    const { results } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.search(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results && results.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  handleChange={this.props.shelfChange}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
