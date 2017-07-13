import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Bookshelf from './Bookshelf'

class Main extends React.Component {
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
      shelf: PropTypes.string.isRequired
    })),
    shelfChange: PropTypes.func.isRequired
  }

  render() {
    const currentlyReading = this.props.books.filter((b) => b.shelf === 'currentlyReading')
    const read = this.props.books.filter((b) => b.shelf === 'read')
    const wantToRead = this.props.books.filter((b) => b.shelf === 'wantToRead')
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
              shelfChange={this.props.shelfChange}
            />
            <Bookshelf
              title="Read"
              books={read}
              shelfChange={this.props.shelfChange}
            />
            <Bookshelf
              title="Want to Read"
              books={wantToRead}
              shelfChange={this.props.shelfChange}
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
}

export default Main
