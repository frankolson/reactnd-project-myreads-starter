import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends React.Component {
  state = {
    results: [],
    query: ""
  }

  static propTypes = {
    shelfChange: PropTypes.func.isRequired
  }

  search = (query) => {
    this.setState({query})
    BooksAPI.search(this.state.query, 20).then((results) => {
      results && this.setState({results})
    })
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
              value={this.state.search}
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
