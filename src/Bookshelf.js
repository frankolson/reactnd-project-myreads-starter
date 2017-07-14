import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const Bookshelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map((book) => (
          <li key={book.id}>
            <Book
              book={book}
              handleChange={props.shelfChange}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
)

Bookshelf.propTypes = {
  shelfChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Bookshelf
