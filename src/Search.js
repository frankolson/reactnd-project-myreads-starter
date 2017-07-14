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
    getBookshelf: PropTypes.func.isRequired,
    shelfChange: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.callAjax = debounce(500, this.callAjax)
  }

  callAjax = (query) => {
    if (query !== "") {
      BooksAPI.search(query, 20).then((results) => {
        if (results.error) {
          this.sortResults(results.items)
        } else {
          this.sortResults(results)
        }
      })
    } else {
      this.setState({results: []})
    }
  }

  search = (event) => {
    event.persist();
    this.callAjax(event.target.value)
  }

  sortResults = (results) => {
    this.setState({
      results: results.map((result) => {
        result.shelf = this.props.getBookshelf(result.id)
        return result
      })
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
              autoFocus
              type="text"
              placeholder="Search by title or author"
              onChange={this.search}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results && results.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  getBookshelf={this.props.getBookshelf}
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
