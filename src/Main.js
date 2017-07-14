import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Bookshelf from './Bookshelf'

const Main = ({books, getBookshelf, shelfChange}) => {
  const currentlyReading = (
    books.filter((b) => b.shelf === 'currentlyReading')
  )

  const read = (
    books.filter((b) => b.shelf === 'read')
  )

  const wantToRead = (
    books.filter((b) => b.shelf === 'wantToRead')
  )

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            title="Currently Reading"
            books={currentlyReading}
            getBookshelf={getBookshelf}
            shelfChange={shelfChange}
          />
          <Bookshelf
            title="Read"
            books={read}
            getBookshelf={getBookshelf}
            shelfChange={shelfChange}
          />
          <Bookshelf
            title="Want to Read"
            books={wantToRead}
            getBookshelf={getBookshelf}
            shelfChange={shelfChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          Add a book
        </Link>
      </div>
    </div>
  )
}

Main.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    shelf: PropTypes.string.isRequired
  })),
  getBookshelf: PropTypes.func.isRequired,
  shelfChange: PropTypes.func.isRequired
}

export default Main
