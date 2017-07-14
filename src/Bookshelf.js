import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const Bookshelf = ({books, getBookshelf, shelfChange, title}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book
              book={book}
              getBookshelf={getBookshelf}
              handleChange={shelfChange}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
)

Bookshelf.propTypes = {
  getBookshelf: PropTypes.func.isRequired,
  shelfChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Bookshelf
