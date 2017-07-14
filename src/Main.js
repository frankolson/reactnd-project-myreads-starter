import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Bookshelf from './Bookshelf'

const Main = (props) => {
  const currentlyReading = (
    props.books.filter((b) => b.shelf === 'currentlyReading')
  )

  const read = (
    props.books.filter((b) => b.shelf === 'read')
  )

  const wantToRead = (
    props.books.filter((b) => b.shelf === 'wantToRead')
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
            shelfChange={props.shelfChange}
          />
          <Bookshelf
            title="Read"
            books={read}
            shelfChange={props.shelfChange}
          />
          <Bookshelf
            title="Want to Read"
            books={wantToRead}
            shelfChange={props.shelfChange}
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
  shelfChange: PropTypes.func.isRequired
}

export default Main
