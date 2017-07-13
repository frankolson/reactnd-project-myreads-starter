import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

class Bookshelf extends React.Component {
  static propTypes = {
    shelfChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
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

export default Bookshelf
